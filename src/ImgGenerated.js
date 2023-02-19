const ImgGenerated = ({img, isLoaded, setIsLoaded}) => {

    return (
        <div style={{ display: "flex", width: "50%", justifyContent: "flex-end" }}>
            <img onLoad={() => setIsLoaded(true)} style={{ justifyContent: "center", objectFit: "contain", maxWidth: "100%", maxHeight: "100%", margin: 10, borderRadius: 5, display: isLoaded ? "flex" : "none" }}  src={img} alt="img-generated" />
        </div>
    )
}

export default ImgGenerated;
