import { message } from 'antd';
import { httpRequst } from '../../../config';
import { types } from '../../actionTypes';


export const addTodo = (payload) => async (dispatch) => {
    try {
        dispatch({ type: types.ADD_TODO_START });
        const addTodos = await httpRequst.post('/addtodo', payload);
        console.log("addTodo", addTodos);
        if (addTodos.data.code) {
            console.log(addTodos.data);
            throw addTodos.data;
        } else {
            const todo = addTodos.data;
            dispatch({ type: types.ADD_TODO_SUCCESS, todo });
        }
    }
    catch (error) {
        dispatch({ type: types.ADD_TODO_FAILD });
        message.error(error.reason || error.message);
    }
};

export const getTodo = (payload) => async (dispatch) => {
    try {
        dispatch({ type: types.GET_TODO_START });
        const getTodos = await httpRequst.get('/gettodo');
        if (getTodos.data.code) {
            console.log(getTodos.data);
            throw getTodos.data;
        } else {
            console.log("getTodo", getTodos);
            const todoList = getTodos.data;
            dispatch({ type: types.GET_TODO_SUCCESS, todoList });
        }
    }
    catch (error) {
        dispatch({ type: types.GET_TODO_FAILD });
        message.error(error.message || error);
    }
};

export const removetodo = (payload) => async (dispatch) => {
    try {
        dispatch({ type: types.REMOVE_TODO_START });
        const removetodos = await httpRequst.post('/removetodo', payload);
        console.log("removetodo", removetodos);
        if (removetodos.data.code) {
            console.log(removetodos.data);
            throw removetodos.data;
        } else {
            message.success(removetodos.data.message);
            const todo = removetodos.data.todo;
            dispatch({ type: types.REMOVE_TODO_SUCCESS, todo });
        }
    }
    catch (error) {
        dispatch({ type: types.REMOVE_TODO_FAILD });
        message.error(error.message || error);
    }
};
