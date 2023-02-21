const PromptInput = ({ setPrompt }) => {
    return <textarea onChange={e => setPrompt(e.target.value)} style={{ margin: "20px auto", width: "90%" }} className="form-control" placeholder="Write your prompt..."></textarea>
}

export default PromptInput;
