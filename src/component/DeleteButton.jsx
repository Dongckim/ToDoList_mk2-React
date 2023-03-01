import { FaTrash } from "react-icons/fa"
import { TodoContext } from "../App";
import { useContext } from "react";

const DeleteButton = ({ color, backgroundColor, item}) => {
    const { todo, setTodo, title, setTitle, content, setContent} = useContext(TodoContext);
    const clickRemoveButtonHandler = (id) => {
        const newTodo = todo.filter((todo) => todo.id !== id)
        setTodo(newTodo)
    }
    return (
        <div>
            <button style={{color,backgroundColor}} className= 'button-2'
                 onClick={()=>{clickRemoveButtonHandler(item.id)}}>
                <FaTrash/>
            </button>
        </div>
    )
}

export default DeleteButton