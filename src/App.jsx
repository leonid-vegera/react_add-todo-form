/* eslint-disable */
import React from 'react';
import './App.css';

import users from './api/users';
import todos from './api/todos';

import { Form } from './components/Form';
import { TodoList } from './components/Todolist'

//добавляем в массив нужного юзера
const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId)
}))

class App extends React.PureComponent {
  state = {
    todos: preparedTodos,  //изменяемые дела
    // inputTodo: '',         //новое дело
    // inputUser: 0,          //новый юзер
    // hasTodoError: false,
    // hasUserError: false,
  }

  addTodo = (title, userId) => {  //метод создающий новое дело какому то юзеру, в параметры текст и id юзера. передаём его потом в Сабмит
    const newTodo = {
      userId: userId,
      id: +new Date(),
      title: title,
      completed: false,
      user: users.find(user => user.id === userId),
    };

    this.setState(state => ({  //добавл-t новое дело в массив
      todos: [...state.todos, newTodo],
    }))
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <div className="App">
          <h1>Add todo form</h1>
          <TodoList todos={todos} />
          <Form onAdd={this.addTodo} users={users} />  {/* //todo так передаём ссылку на колбек метода добавления товаров в Форму */}
        </div>
      </>
    )
  }
}

export default App;
