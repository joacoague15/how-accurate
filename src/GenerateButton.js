import axios from "axios";

const GenerateButton = ({ setImg, prompt, setAccuracyPercentage, setExplanation, isLoaded, setIsLoaded }) => {

    const generateImg = () => {
        axios.get('https://stable-demo.rj.r.appspot.com/generateImg', {
            params: {
                prompt: prompt,
                size: "1024x1024",
            }
        })
            .then(response => setImg(response.data.data))
            .catch(error => console.log(error)
        )
    }

    const getAccuracyValue = () => {
        axios.get('https://stable-demo.rj.r.appspot.com/accuracy', {
            params: {
                prompt: prompt,
                size: "1024x1024",
            }
        })
            .then(response => setAccuracyPercentage(response.data.data))
            .catch(error => console.log(error))
    }

    const getExplanation = () => {
        axios.get('https://stable-demo.rj.r.appspot.com/explanation', {
            params: {
                prompt: prompt,
                size: "1024x1024",
            }
        })
            .then(response => setExplanation(response.data.data))
            .catch(error => console.log(error))
    }

    const handleOnClick = () => {
        setIsLoaded(false);
        generateImg();
        getAccuracyValue();
        getExplanation();
    }

    if (isLoaded)
        return <button onClick={handleOnClick} style={{ display: "flex", height: 50, margin: "20px auto", justifyContent: "center", alignItems: "center", textAlign: "center", width: "10vw" }} type="button" className="btn btn-light" disabled={!prompt}>Generate</button>
    return (
        <div style={{ display: "flex", margin: "20px auto", width: 50, height: 50 }} className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

};

export default GenerateButton;
