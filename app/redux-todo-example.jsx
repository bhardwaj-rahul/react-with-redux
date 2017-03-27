const redux = require('redux');
console.log('redux for todo app');

// ES5
// var reducer = (state, action) => {
//   state = state || {name:"Anonymous"};
//
// };

// ES6
var stateDefault = {
  showCompleted: false,
  searchText: "",
  todos:[]
}
var reducer = (state = stateDefault, action) => {
  return state; 
};
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('Current State', currentState);
