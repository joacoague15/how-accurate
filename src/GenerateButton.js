import axios from "axios";
import {useEffect} from "react";

const GenerateButton = ({ setImg, prompt, setAccuracyPercentage, setExplanation, isLoaded, setIsLoaded }) => {
    useEffect(() => {
        console.log(isLoaded)
    }, [isLoaded])

    const generateImg = () => {
        axios.get('http://localhost:8080/generateImg', {
            params: {
                prompt: prompt
            }
        })
            .then(response => {
                setImg(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getAccuracyValue = () => {
        axios.get('http://localhost:8080/accuracy', {
            params: {
                prompt: prompt
            }
        })
            .then(response => setAccuracyPercentage(response.data.data))
    }

    const getExplanation = () => {
        axios.get('http://localhost:8080/explanation', {
            params: {
                prompt: prompt
            }
        })
            .then(response => setExplanation(response.data.data))
    }

    const handleOnClick = () => {
        setIsLoaded(false);
        generateImg();
        getAccuracyValue();
        getExplanation();
    }

    if (isLoaded)
        return <button onClick={handleOnClick} style={{ display: "flex", height: 50, margin: "20px auto", justifyContent: "center", alignItems: "center", textAlign: "center", width: "20%" }} type="button" className="btn btn-light">Generate</button>
    return (
        <div style={{ display: "flex", margin: "20px auto", width: 50, height: 50 }} className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

};

export default GenerateButton;
