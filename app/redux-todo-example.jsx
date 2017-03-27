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
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    default:
      return state;
  }

};

var store = redux.createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var currentState = store.getState();
console.log('Current State', currentState);

store.subscribe(() =>{
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type:"CHANGE_SEARCH_TEXT",
  searchText: "ABC"
});
store.dispatch({
  type:"CHANGE_SEARCH_TEXT",
  searchText: "B"
});
store.dispatch({
  type:"CHANGE_SEARCH_TEXT",
  searchText: "C"
});
store.dispatch({
  type:"CHANGE_SEARCH_TEXT",
  searchText: "D"
});

console.log("new state",store.getState())
