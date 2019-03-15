import React, { Component } from 'react';
import UsersList from './components/usersList';
import MyForm from './components/form';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <br></br>
          <MyForm></MyForm>
          <br></br>
          <UsersList></UsersList>
        </div>
      </Provider>
    );
  }
}

export default App;
