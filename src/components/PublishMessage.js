import { useState } from "react";
import { newMessage } from "../state/action";

function PublishMessage(props) {
    const { dispatch } = props;
    const [text, setText] = useState();

    const updateText = (event) => {
        setText(event.target.value);
    }

    const publishMessage = () => {
        dispatch(newMessage(text));
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') publishMessage();
    }

    return (
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText} onKeyDown={handleKeyPress} />
            {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    );
}

export default PublishMessage;