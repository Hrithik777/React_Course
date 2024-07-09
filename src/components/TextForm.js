
import {useState} from "react"; 

function TextForm(props) {

    const [text,setText] = useState(''); 

    function handleTextChange(e) {
        setText(e.target.value); 
    }

    function handleUpConvert() {
        let newText = text.toUpperCase();
        setText(newText); 
        props.defineAlert("success","Text converted to Uppercase"); 
    }

    function handleLowConvert() {
        let newText = text.toLowerCase(); 
        setText(newText); 
        props.defineAlert("success","Text converted to Lowercase"); 
    }

    function handleClearText() {
        setText(''); 
        props.defineAlert("success","Text cleared"); 
    }
    
    function handleCopyClipboard() {
        navigator.clipboard.writeText(text);
        props.defineAlert("success","Text copied to Clipboard"); 
    }

    return(
        <>
            <h1 className={`mt-4 text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleTextChange} id="formTextArea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1 text-light" onClick={handleUpConvert}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1 text-light" onClick={handleLowConvert}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClipboard}>Copy to Clipboard</button>
            <div className={`text-${props.mode === 'light'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((ele) => ele !== "").length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").filter((ele) => ele !== "").length).toFixed(3)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    ); 
}

export default TextForm; 
