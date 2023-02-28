import { FaTrash, FaCheck } from "react-icons/fa";

const Main = () => {
    return(
        <div className="todo__list__item">
            안녕하세요
            <button className="button-2"><FaCheck/></button>
            <button className="button-2"><FaTrash/></button>
        </div>
    )
}
export default Main;