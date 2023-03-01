import { TodoContext } from "../App";
import { useContext } from "react";

const InputContents = () => {
    const { todo, setTodo, content,setContent } = useContext(TodoContext);
    return(
        <input 
                className="input"
                type="text"
                placeholder="Add a task here..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
    )
}

export default InputContents