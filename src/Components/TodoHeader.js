import React from 'react';
import '../styles/TodoHeader.css';

class TodoHeader extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const input = this.refs.input.value;
    if (input!=='')
       this.props.addTodo(input);
  }
  render(){
    return(
      <div className='Todo-header'>
        <h2>Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='input' placeholder='Whats in your mind...'/>
          <input type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default TodoHeader;
