const PromptInput = ({ setPrompt }) => {
    return <textarea id="prompt-textarea" onChange={e => setPrompt(e.target.value)} style={{ margin: "20px auto" }} className="form-control" placeholder="Write your prompt..."></textarea>
}

export default PromptInput;
