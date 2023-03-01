import InsertButton from "./InsertButton";
import InputContents from "./InputContents";
import { useContext } from "react";
import { TodoContext } from "../App";

const HeaderInput = () => {
    const { todo, setTodo, content,setContent } = useContext(TodoContext);
    return(
        <>
            <div className="todo__input" >
                <InputContents/>
                <InsertButton/>
            </div>
        </>
    )
}

export default HeaderInput