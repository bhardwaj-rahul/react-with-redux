const redux = require('redux');
console.log('redux is installed');

// ES5
// var reducer = (state, action) => {
//   state = state || {name:"Anonymous"};
//
// };

// ES6
var reducer = (state = {name:"Anonymous"}, action) => {
  return state;
};
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('Current State', currentState); 
