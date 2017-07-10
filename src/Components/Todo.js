import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import _ from 'underscore';
import '../styles/Todo.css';
import '../styles/mediaquery.css';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos : []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(newTodo){
    this.setState({ todos : this.state.todos.concat([{task:newTodo,key:_.uniqueId("todo_")}]) });
  }
  removeTodo(index){
    let todos= this.state.todos;
    todos.splice(index,1);
    this.setState({ todos : todos});
  }
  render(){
    return (
      <div className='Todo'>
        <TodoHeader addTodo={this.addTodo}/>
        <TodoBody todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }

}


export default Todo;
