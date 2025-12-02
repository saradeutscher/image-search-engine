import useImage from "./useImage"

const Image = ({ fileName, alt }) => {
    const { loading, error, image } = useImage(fileName)

    console.log(error)
    return (
        <>
            <img style={styles.image}
                src={image}
                alt={alt}
            />
        </>
    )
}

const styles = {
    image: {
      width: '75%',
      border: '10px solid #ddd',
      borderRadius: '4px',
      flexWrap: 'wrap',
    },
  };

export default Image