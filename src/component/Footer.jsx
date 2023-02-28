import { FaTrash, FaCheck } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="todo__list__completed">
            안녕하세요
            <button className="button"><FaCheck/></button>
            <button className="button"><FaTrash/></button>
        </div>
    )
}
export default Footer