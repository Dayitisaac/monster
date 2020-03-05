import React from 'react';

import './App.css';
import TableList from './components/table-list/table-list.components'
import Search from './components/search/search.component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    }

  }

  deleteUser = (id) => {
    const { users } = this.state;
    const index = users.findIndex(a => a.id === id)
    if (index === -1) return;
    users.splice(index, 1)
    this.setState({ users })




  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));

  }

  render() {

    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => (
      user.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <h1>Welcome to my monster app </h1>
        <Search handleSearch={this.handleSearch} />
        <TableList users={filteredUsers} deleteUser={this.deleteUser} />
      </div>


    )

  }

}

export default App;
