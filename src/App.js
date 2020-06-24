import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milke'},
      {id: 2, content: 'play mariokart'}
    ]
  };
  supprimerTodo = (id) => {
    console.log(id);
    let newtodo = this.state.todos;
    let updatetodo = newtodo.filter(todo => {
      return(
        todo.id !== id
      );
    });
    this.setState({
      todos: updatetodo
    })
  };
  add = (todoState) => {
    todoState.id = Math.random();
    let newState = [...this.state.todos, todoState];
    this.setState({
      todos: newState
    });
  };
  render(){
    return(
      <div className="todo-app container">
        <h1  className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} supprimerTodo={this.supprimerTodo}/>
        <AddTodo add={this.add}/>
      </div>
    );
  };
};

export default App;
