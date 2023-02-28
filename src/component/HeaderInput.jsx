import { FaPlus } from "react-icons/fa";

const HeaderInput = () => {
    return(
        <form className="todo__input">
            <input 
                className="input"
                type="text"
                // onChange={this.handleChange}
                placeholder="Add a task here..."
            />
            <button type="submit" className="button-1">
                <FaPlus/>
            </button>
        </form>
    )
}

export default HeaderInput