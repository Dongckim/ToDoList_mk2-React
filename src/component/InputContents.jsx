import { TodoContext } from "../App";
import { useContext } from "react";

const InputContents = () => {
    const { todo, setTodo, title, setTitle, content, setContent} = useContext(TodoContext);
    return(
        <>
        <input 
            className="input"
            style={{width : '300px', borderRight : '4px solid #3b5998'}}
            type="text"
            placeholder="Add a title here..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        />
        <input 
            className="input"
            type="text"
            placeholder="Add a task here..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
            />
        </>
    )
}

export default InputContents