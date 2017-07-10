import React from 'react';
import '../styles/TodoItem.css';
import 'animate.css';

class TodoItem extends React.Component{
  handleClick(e){
    e.preventDefault();
    if(e.target.style.textDecoration==='line-through'){
       e.target.className = 'animated fadeOut' ;
       setTimeout(() => {this.props.removeTodo(this.props.id)},400);
    }
    else{
       e.target.style.textDecoration = 'line-through';}
  }


  render(){
    return (
      <li className='Todo-item animated fadeIn'>
        <p onClick={this.handleClick.bind(this)}>{this.props.todo}</p>
      </li>
    );
  }
}

export default TodoItem;
