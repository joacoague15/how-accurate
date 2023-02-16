const ImgGenerated = ({img}) => {
    return (
        <div style={{ display: "flex", width: "50%", justifyContent: "flex-end" }}>
            <img style={{ justifyContent: "center", objectFit: "contain", maxWidth: "100%", maxHeight: "100%", margin: 10, borderRadius: 5 }}  src={img} alt="img-generated" />
        </div>
    )
}

export default ImgGenerated;
