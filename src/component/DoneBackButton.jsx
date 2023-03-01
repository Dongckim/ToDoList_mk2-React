import { FaRedoAlt } from "react-icons/fa"
import { TodoContext } from "../App";
import { useContext } from "react";

const DoneBackButton = ({ color, backgroundColor, item}) => {
    const { todo, setTodo, content,setContent } = useContext(TodoContext);
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
            <button style={{color,backgroundColor}} className= 'button-2'onClick={()=>{clickWorkingStatusChanger(item.id)}}>
                <FaRedoAlt/>
            </button>
        </div>
    )
}

export default DoneBackButton