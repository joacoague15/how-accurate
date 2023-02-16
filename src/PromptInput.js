const PromptInput = ({ setPrompt }) => {
    return <textarea onChange={e => setPrompt(e.target.value)} style={{ margin: 20, width: "100%" }} className="form-control" placeholder="Write your prompt..."></textarea>
}

export default PromptInput;
