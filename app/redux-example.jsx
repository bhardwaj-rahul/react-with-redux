const redux = require('redux');
console.log('redux is installed');

// ES5
// var reducer = (state, action) => {
//   state = state || {name:"Anonymous"};
//
// };

// ES6
var reducer = (state = {name:"Anonymous"}, action) => {
  console.log('Action', action);
  return state;
};
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('Current State', currentState);

var action = {
  type:"CHANGE_NAME",
  name:"Rahul"
};
store.dispatch(action);
