const PromptInput = ({ setPrompt }) => {
    return <textarea onChange={e => setPrompt(e.target.value)} style={{ margin: "20px auto", width: "20vw"}} className="form-control" placeholder="Write your prompt..."></textarea>
}

export default PromptInput;
