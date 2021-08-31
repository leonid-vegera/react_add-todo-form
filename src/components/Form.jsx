/* eslint-disable */
import React from 'react';

export class Form extends React.Component {
  state = {
    inputTodo: '',         //новое дело
    inputUser: 0,          //новый юзер
    hasTodoError: false,
    hasUserError: false,
  }

  //#region handleChange (value)
  handleTodoChange = (event) => {  //обрабатыв ввод нового дела (инпут)
    this.setState({
      inputTodo: event.target.value,
      hasTodoError: false,  //убираем еррор сразу после ввода символа
    })
  }

  handleUserChange = (event) => {  //обрабатываем выбор юзера (селект), индекс делаем числом
    this.setState({
      inputUser: +event.target.value,
      hasUserError: false,  //убираем еррор сразу после выбора юзера
    })
  }
  //#endregion

  handleSubmit = (event) => {  //обрабатыв форму при сабмите
    event.preventDefault();
    this.setState(state => ({
      hasTodoError: !state.inputTodo,  //наличие ошибки тудушки будет только тогда, когда ввода тудушки нет, аналогия ниже
      // hasTodoError: state.inputTodo === '' ? true : false,
      hasUserError: !state.inputUser,  //наличие ошибки юзера будет только тогда, когда ввода юзера нет
    }))
    if (!this.state.inputTodo) {
      return;
    }
    if (!this.state.inputUser) {
      return;
    }
    //todo так принимаем ссылку на колбек метода добавления товаров из Арр
    this.props.onAdd(this.state.inputTodo, this.state.inputUser);
    this.setState({
      inputTodo: '',
      inputUser: 0,
    })
  }

  render() {
    const { users } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div>
          <label htmlFor="new-todo">
            {'Add new todo '}
          </label>
          <input
            type="text"
            id="new-todo"
            name="new-todo"
            placeholder="New todo"
            value={this.state.inputTodo}
            onChange={this.handleTodoChange}

          />
          {this.state.hasTodoError && (  //если есть ошибка, отображается спан
            <span className="error">
              Please enter Todo
            </span>
          )}
        </div>

        <div>
          {'Choose user '}
          <select
            name="todo"
            value={this.state.inputUser}
            onChange={this.handleUserChange}
          >
            <option
              value=""
              disabled
            >
              Choose user
            </option>
            {users.map(user => (
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </select>
          {this.state.hasUserError && (
            <span className="error">
              Please choose user
            </span>
          )}

        </div>


        <button
          type="submit"
        >
          Add new todo
        </button>
      </form>
    )
  }
}