import PromptInput from "./PromptInput";
import GenerateButton from "./GenerateButton";
import { useState } from "react";

const GenerateSection = ({setImg, isLoaded, setIsLoaded}) => {
    const [prompt, setPrompt] = useState('');
    const [accuracyPercentage, setAccuracyPercentage] = useState('0');
    const [explanation, setExplanation] = useState('');

    return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ margin: "5px auto", color: "white" }} id="title">Prompt Accuracy Checker</h1>
                <div style={{ maxWidth: "100%", margin: "auto" }}>
                    <PromptInput setPrompt={setPrompt} />
                    <GenerateButton setImg={setImg} prompt={prompt} setAccuracyPercentage={setAccuracyPercentage} setExplanation={setExplanation} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
                </div>
                <div>
                    <label id="how-accurate-label" style={{ margin: "auto", display: "flex", color: "white" }} htmlFor="howAccurate">Accuracy estimation</label>
                    <input style={{ margin: "auto", display: "flex" }} value={accuracyPercentage? parseInt(accuracyPercentage) : 0} type="range" className="form-range" id="how-accurate-input" disabled />
                    <h4 style={{ color: "white", textAlign: "center" }}>{accuracyPercentage}%</h4>
                    <h4 style={{ color: "white", textAlign: "center", margin: 20 }}>How can you improve It?</h4>
                    <p style={{ display: "flex", color: "white", padding: 20, margin: "auto" }}>{explanation}</p>
                </div>
            </div>
    )
}

export default GenerateSection;
