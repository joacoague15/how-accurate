const ImgGenerated = ({img, isLoaded, setIsLoaded}) => {

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
            <img onLoad={() => setIsLoaded(true)} style={{ justifyContent: "center", objectFit: "contain", maxWidth: "100%", maxHeight: "100%", padding: 10, borderRadius: 5, display: isLoaded && img !== '' ? "flex" : "none" }}  src={img} alt="img-generated" />
        </div>
    )
}

export default ImgGenerated;
