import users from '../data/users.json';
import { SUBMIT_INFO } from '../actions/types';

if (window.localStorage.getItem("users") == null) {
    window.localStorage.setItem('users', JSON.stringify(users));
};
const initialState = JSON.parse(window.localStorage.getItem('users'));

export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_INFO:
          window.localStorage.setItem('users', JSON.stringify(state.concat(action.newUser)));
          return state.concat(action.newUser)
        default:
          return state;
      }
}
