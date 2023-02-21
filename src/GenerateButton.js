import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const GenerateButton = ({ setImg, prompt, setAccuracyPercentage, setExplanation, isLoaded, setIsLoaded }) => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_IMG_CHATGPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const generateImg = () => {
        axios.post('https://api.openai.com/v1/images/generations', {
            "prompt": prompt,
            "size": "1024x1024",
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_IMG_GENERATION_KEY}`
            }
        }).then(response => setImg(response.data.data[0].url))
          .catch(error => console.log(error)
        )
    }

    const getAccuracyValue = async () => {
        try {
            const completion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `Respond this question only with a number from 1 to 100.
                Calculate how accurate is this prompt for stable diffusion: "${prompt}"?
                Pay attention to this, I want a max 2 character length response.`,
                max_tokens: 100,
            });
            setAccuracyPercentage(completion.data.choices[0].text);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getExplanation = async () => {
        try {
            const completion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `Tell me in less than 100 words how can i improve the accuracy of this prompt for stable diffusion: "${prompt}"?`,
                max_tokens: 256,
            });
            setExplanation(completion.data.choices[0].text);
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleOnClick = () => {
        setIsLoaded(false);
        generateImg();
        getAccuracyValue();
        getExplanation();
    }

    if (isLoaded)
        return <button onClick={handleOnClick} style={{ display: "flex", height: 50, margin: "20px auto", justifyContent: "center", alignItems: "center", textAlign: "center", width: "30%" }} type="button" className="btn btn-light" disabled={!prompt}>Generate</button>
    return (
        <div style={{ display: "flex", margin: "20px auto", width: 50, height: 50 }} className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

};

export default GenerateButton;
