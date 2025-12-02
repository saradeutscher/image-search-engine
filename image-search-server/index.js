import express from 'express';
import pgvector from 'pgvector/pg';
import pkg from 'pg';
import cors from "cors";
import {visionEmbeddingGenerator, textEmbeddingGenerator} from './model.js'
import {getFilePaths} from './utils.js';

const { Client } = pkg;

const app = express()
const port = 3000;

app.use(express.json());

const corsOptions ={
  origin:'http://localhost:5173',
  credentials:true,
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/search', async (req, res) => {

  console.log(req)

  try {
    // Load tokenizer and text model
    //await client.connect();

    // Computer text embeddings
    console.log(req.body['searchText'])
    const text_emb = await textEmbeddingGenerator(req.body['searchText'])

    const queryTextEmbedding = [pgvector.toSql(Array.from(text_emb))]

    console.log(queryTextEmbedding)

    // Similarity search
    const result = await client.query(`
      SELECT path FROM Search_table ORDER BY embedding <-> $1 LIMIT 5`,
      queryTextEmbedding);

    res.json(result.rows);
    console.log(result.rows)
  } catch (error) {
    console.error('Error performing search', error);
    res.status(500).send('Error performing search');
  }
});

app.listen(port, () => console.log(`Example app listening at http:/localhost:${port}`))


const client = new Client({
  user: 'saradeutscher',
  host: 'localhost',
  database: 'image_db',
  port: 5432,
});

await client.connect()