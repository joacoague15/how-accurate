import PromptInput from "./PromptInput";
import GenerateButton from "./GenerateButton";
import { useState } from "react";

const GenerateSection = ({setImg}) => {
    const [prompt, setPrompt] = useState('');
    const [accuracyPercentage, setAccuracyPercentage] = useState('');
    const [explanation, setExplanation] = useState('');

    return (
            <div style={{ display: "flex", width: "50%", flexDirection: "column" }}>
                <div>
                    <PromptInput setPrompt={setPrompt} />
                    <GenerateButton setImg={setImg} prompt={prompt} setAccuracyPercentage={setAccuracyPercentage} setExplanation={setExplanation} />
                </div>
                <div>
                    <input style={{ margin: "auto", display: "flex", width: "80%", transition: "1s ease", color: "red" }} value={accuracyPercentage? parseInt(accuracyPercentage) : 0} type="range" className="form-range" id="howAccurate" disabled />
                    <p style={{ color: "white", margin: 20, width: "100%" }}>{explanation}</p>
                </div>
            </div>
    )
}

export default GenerateSection;
