import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_actions';
import { getTags } from '../actions/getTags_actions';
import { completeTodo } from '../actions/completeTodo_actions';
import { removeTodo } from '../actions/removeTodo_actions';
import TodoRow from '../components/TodoRow';

class TodoRowContainer extends Component {

  onClickComplete = () => {
    this.props.completeTodo(this.props.id)
    .then(() => this.props.getTodos());
  };

  onClickDelete = () => {
    this.props.removeTodo(this.props.id)
    .then(() => this.props.getTodos());
  };

  render() {
    return (
      <TodoRow 
        id={this.props.id}
        todo={this.props.todo}
        tags={this.props.tags}
        complete={this.props.complete}
        onClickComplete={this.onClickComplete}
        onClickDelete={this.onClickDelete} />
    );
  }
}

function mapStateToProps(state) {
  return { 
      todos: state.todos.todos,
      tags: state.todos.tags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(getTodos()),
    getTags: () => dispatch(getTags()),
    completeTodo: (todoId) => dispatch(completeTodo(todoId)),
    removeTodo: (todoId) => dispatch(removeTodo(todoId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoRowContainer);

  