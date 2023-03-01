import InsertButton from "./InsertButton";
import InputContents from "./InputContents";

const HeaderInput = () => {
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