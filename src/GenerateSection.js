import PromptInput from "./PromptInput";
import GenerateButton from "./GenerateButton";
import { useState } from "react";

const GenerateSection = ({setImg, isLoaded, setIsLoaded}) => {
    const [prompt, setPrompt] = useState('');
    const [accuracyPercentage, setAccuracyPercentage] = useState('');
    const [explanation, setExplanation] = useState('');

    return (
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ maxWidth: "100" }}>
                    <PromptInput setPrompt={setPrompt} />
                    <GenerateButton setImg={setImg} prompt={prompt} setAccuracyPercentage={setAccuracyPercentage} setExplanation={setExplanation} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
                </div>
                <div>
                    <label style={{ margin: "auto", display: "flex", width: "90%", color: "white" }} htmlFor="howAccurate">Accuracy estimation</label>
                    <input style={{ margin: "auto", display: "flex", width: "90%" }} value={accuracyPercentage? parseInt(accuracyPercentage) : 0} type="range" className="form-range" id="howAccurate" disabled />
                    <h4 style={{ color: "white", textAlign: "center" }}>{accuracyPercentage}%</h4>
                    <h4 style={{ color: "white", textAlign: "left", margin: 20 }}>How can you improve It?</h4>
                    <p style={{ color: "white", padding: 20, width: "100%" }}>{explanation}</p>
                </div>
            </div>
    )
}

export default GenerateSection;
