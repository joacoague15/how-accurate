const ImgGenerated = ({img, isLoaded, setIsLoaded}) => {

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img onLoad={() => setIsLoaded(true)} style={{ justifyContent: "center", objectFit: "contain", width: "30%", margin: "auto", borderRadius: 5, display: isLoaded && img !== '' ? "flex" : "none" }}  src={img} alt="img-generated" />
        </div>
    )
}

export default ImgGenerated;
