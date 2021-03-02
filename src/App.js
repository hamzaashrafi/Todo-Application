import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { TodoContainer } from './container';
import { getTodo } from './store/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    const { getTodo } = this.props;
    getTodo();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TodoContainer} />
        </Switch>
      </Router>
    );
  }
}


const mapStateToProps = (props) => {
  const { todo } = props;
  return {
    todoList: todo.todoList,
    isLoading: todo.isLoading,
  };
};

export default connect(mapStateToProps, { getTodo })(App);
