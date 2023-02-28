export const clickAddButtonHandler = (event, dataObj, funcObj) => {
    const [ todo , content ] = dataObj;
    const [ setTodo, setContent ] = funcObj;

    const newTodo = {
        id : todo.length + 1,
        content,
        isDone : false,
    };
    setTodo([...todo, newTodo])
}