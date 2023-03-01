import { FaCheck } from "react-icons/fa"
import { TodoContext } from "../App";
import { useContext } from "react";

const CheckButton = ({ color, backgroundColor, item}) => {
    const { todo, setTodo, title, setTitle, content, setContent} = useContext(TodoContext);
    const clickWorkingStatusChanger = (id) => {
        let newTodo = todo.map((item) => {
            if (item.id == id) {
                item.isDone = !item.isDone
                return item
            } else {
                return item
            }
        });
        setTodo(newTodo)
    }
    return (
        <div>
            <button style={{color,backgroundColor}} className= 'button-2' onClick={()=>{clickWorkingStatusChanger(item.id)}}>
                <FaCheck/>
            </button>
        </div>
    )
}

export default CheckButton