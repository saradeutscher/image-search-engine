# Image Search Engine Test Case
Adapted from: 
https://www.tigerdata.com/blog/how-to-build-an-image-search-application-with-openai-clip-postgresql-in-javascript

Website is built using React, and the react-router-template as a starting point

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Code Layout
```
├── package.json
├── package-lock.json
├── image-search-server/
│   └── node_modules/    
│   └── dataset/
│   └── database.js
│   └── index.js
│   └── model.js
│   └── utils.js
│   └── package-lock.json
│   └── package.json
├── app/
│   └── routes/
│       └── home.tsx
│   └── App.jsx
│   └── SearchBar.jsx
│   └── Image.jsx
│   └── useImage.jsx
│   └── root.jsx
│   └── routes.ts
```
