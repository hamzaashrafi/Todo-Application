import { message } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoComponent } from '../../component';
import { addTodo, removetodo } from '../../store/actions';

class TodoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            todoList: [],
        };
    }

    static getDerivedStateFromProps(props, state) {
        const todoList = props.todoList;
        return { todoList };
    }

    onInputHandler = (event) => {
        try {
            const { value } = event.target;
            this.setState({ todo: value });
        } catch (error) {
            message.error(error.message);
        }
    };

    onAddInList = () => {
        const { addTodo } = this.props;
        addTodo({ todo: this.state.todo });
    };

    onRemoveInList = (id) => {
        const { removetodo } = this.props;
        removetodo({ _id: id });
    };

    render() {
        return (
            <TodoComponent
                todoList={this.state.todoList}
                todo={this.state.todo}
                onInputHandler={this.onInputHandler.bind(this)}
                onRemoveInList={this.onRemoveInList.bind(this)}
                onAddInList={this.onAddInList.bind(this)}
            />
        );
    }
}

const mapStateToProps = (props) => {
    const { todo } = props;
    console.log(todo.todoList);
    return {
        todoList: todo.todoList,
        isLoading: todo.isLoading,
    };
};

export default connect(mapStateToProps, { addTodo, removetodo })(TodoContainer);
