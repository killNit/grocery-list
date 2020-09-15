import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import AddForm from './AddForm';

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Apples", complete: false, },
      {id: 2, name: "Milk", complete: false, },
      {id: 3, name: "Peanut Butter", complete: false, },
    ]
  };

  getUniId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const item = {name, id: this.getUniId() , complete: false }
    this.setState({ groceries: [item, ...groceries]});
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }



  render() {
    const { groceries } = this.state;
    return (
      <div>
        <AddForm addItem={this.addItem} />
        <List name="Family List" items={groceries} itemClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
