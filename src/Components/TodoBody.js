import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoBody.css';


class TodoBody extends React.Component{
  render(){

    const todoList = this.props.todos.map((todo,index) => {
      return (
        <TodoItem key={todo.key}
                  id={index}
                  todo={todo.task}
                  removeTodo={this.props.removeTodo} />
      );
    });

    return (
      <div className='Todo-body'>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

export default TodoBody;
