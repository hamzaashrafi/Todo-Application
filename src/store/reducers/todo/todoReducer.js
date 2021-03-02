import { types } from '../../actionTypes';

// initeat State
let initialState = {
    todoList: [],
    isLoading: false,
};

function todoReducer(todo = initialState, action) {
    switch (action.type) {
        case types.GET_TODO_START:
            return { ...todo, isLoading: true };
        case types.GET_TODO_SUCCESS:
            return { ...todo, isLoading: true, todoList: action.todoList };
        case types.GET_TODO_FAILD:
            return { ...todo, isLoading: true };

        case types.ADD_TODO_START:
            return { ...todo, isLoading: true };
        case types.ADD_TODO_SUCCESS:
            const todoList = todo.todoList.slice(0);
            const index = todoList.findIndex(item => item._id.toString() === action.todo._id.toString());
            console.log("action.todo", action.todo);
            console.log("index", index);
            if (index !== -1) {
                todoList.splice(index, 1, action.todo);
            }
            if (index === -1) {
                todoList.unshift(action.todo);
            }
            return { ...todo, isLoading: false, todoList };
        case types.ADD_TODO_FAILD:
            return { ...todo, isLoading: false };

        case types.REMOVE_TODO_START:
            return { ...todo, isLoading: true };
        case types.REMOVE_TODO_SUCCESS:
            const todoLists = todo.todoList.slice(0);
            const todoIndex = todoLists.findIndex(item => item._id.toString() === action.todo._id.toString());
            todoLists.splice(todoIndex, 1);
            return { ...todo, isLoading: true, todoList: todoLists };
        case types.REMOVE_TODO_FAILD:
            return { ...todo, isLoading: true };

        default:
            return todo;
    }
}

export default todoReducer;
