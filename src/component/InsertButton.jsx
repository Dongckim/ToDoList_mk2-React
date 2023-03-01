import { FaPlus } from "react-icons/fa"
import { TodoContext } from "../App";
import { useContext } from "react";

const InsertButton = () => {
    const { todo, setTodo, title, setTitle, content, setContent} = useContext(TodoContext);
    const clickAddButtonHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            title,
            content,
            isDone: false
        };
        setTodo([...todo, newTodo])
    }
    return (
        <form>
            <button type="submit" className="button-1" onClick={clickAddButtonHandler}>
                <FaPlus/>
            </button>
        </form>
    )
}

export default InsertButton