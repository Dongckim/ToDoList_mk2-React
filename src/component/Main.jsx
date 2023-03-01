import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";

const Main = ({item}) => {
    return(
        <div key={item.id} className="todo__list__item">
            {item.content}
            <div className="button-position">
                <CheckButton color={'#3b5998'} backgroundColor = {'#ffffff'} item = {item}/>
                <DeleteButton color={'#3b5998'} backgroundColor = {'#ffffff'} item = {item}/>
            </div>
        </div>
    )
}
export default Main