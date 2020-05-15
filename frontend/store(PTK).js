import { createStore, combineReducers } from 'redux';

const initialState = {
  token: "",
  me: null,
  avatar: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_TOKEN':
      return Object.assign({}, state, {
        token: action.token
      })
      
    /**************************************** PTK ****************************************/

    case 'UPDATE_ME':
      return Object.assign({}, state, {
        me: action.me,
      })

    /**************************************** PTK ****************************************/

      
  }
  return state
};
const store = createStore(combineReducers({ reducer }));
export default store;
