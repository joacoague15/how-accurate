import axios from "axios";

const GenerateButton = ({ setImg, prompt, setAccuracyPercentage, setExplanation }) => {
    const generateImg = () => {
        axios.get('http://localhost:8080/generateImg', {
            params: {
                prompt: prompt
            }
        })
            .then(response => {
                console.log(response)
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
        generateImg();
        getAccuracyValue();
        getExplanation();
    }

    return <button onClick={handleOnClick} style={{ display: "flex", height: 50, margin: "20px auto", justifyContent: "center", alignItems: "center", textAlign: "center", width: "20%" }} type="button" className="btn btn-light">Generate</button>

};

export default GenerateButton;
