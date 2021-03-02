import React from 'react';

function TodoComponent(props) {
    const { todo, todoList, onInputHandler, onAddInList, onRemoveInList } = props;
    console.log(todoList);
    return (
        <div>
            <h1>TodoComponent</h1>
            <input onChange={onInputHandler} name="todo" value={todo} />
            <button onClick={onAddInList}>Add</button>
            <ul>
                {todoList && todoList.map((item, index) => {
                    return <div key={index}>
                        <li >{item.todo}</li>
                        <button onClick={() => onRemoveInList(item._id)}>Remove</button>
                    </div>;
                })}
            </ul>
        </div>
    );
}
export default TodoComponent;
