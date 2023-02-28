import { FaPlus } from "react-icons/fa";
import { clickAddButtonHandler } from "../function";

const HeaderInput = ({dataObj, funcObj}) => {
    console.log(dataObj, funcObj)
    // const [ setTodo, setContent ] = funcObj; 
    // console.log({dataObj, funcObj})
    return(
        <form className="todo__input">
            <input 
                className="input"
                type="text"
                placeholder="Add a task here..."
                // // onChange={(event) =>{
                // //         setContent(event.target.value)
                // //     } 
                // }
            />
            <button type="submit" className="button-1" onChange={(event) => {clickAddButtonHandler(event, dataObj, funcObj)}}>
                <FaPlus/>
            </button>
        </form>
    )
}

export default HeaderInput