import {SUBMIT_INFO} from './types';

export const submitInfo = (data) => dispatch => {

  dispatch({
    type: SUBMIT_INFO,
    newUser: data
  })
}