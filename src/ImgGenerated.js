const ImgGenerated = ({img, isLoaded, setIsLoaded}) => {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <img onLoad={() => setIsLoaded(true)} style={{ justifyContent: "center", objectFit: "contain", margin: "auto", display: isLoaded && img !== '' ? "flex" : "none" }}  src={img} alt="img-generated" />
        </div>
    )
}

export default ImgGenerated;
