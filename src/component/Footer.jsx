import DoneBackButton from "./DoneBackButton";
import DeleteButton from "./DeleteButton";

const Footer = ({item}) => {
    return(
        <div key={item.id} className="todo__list__completed">
            {item.content}
            <div className="button-position">
              <DoneBackButton color = {'#ffffff'} backgroundColor = {'#3b5998'} item = {item}/>
              <DeleteButton color = {'#ffffff'} backgroundColor = {'#3b5998'} item ={item}/>  
            </div>
            
        </div>
    )
}
export default Footer