import DoneBackButton from "./DoneBackButton";
import DeleteButton from "./DeleteButton";
import { FaCheck } from "react-icons/fa";

const Footer = ({item}) => {
    return(
        <div key={item.id} className="todo__list__completed">
        <FaCheck/>{item.title} &emsp; ➣ &emsp; {item.content} 
            <div className="button-position">
              <DoneBackButton color = {'#ffffff'} backgroundColor = {'#3b5998'} item = {item}/>
              <DeleteButton color = {'#ffffff'} backgroundColor = {'#3b5998'} item ={item}/>  
            </div>
            
        </div>
    )
}
export default Footer