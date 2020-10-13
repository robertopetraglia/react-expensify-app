import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducers = () => (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        };
      case "SET":
        return {
          conunt: action.count,
        };
      case "RESET":
        return {
          count: 0,
        };
      default:
        return state;
    }
  }


const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())

store.dispatch(decrementCount({ decrementBy: 2 }))
store.dispatch(decrementCount())

store.dispatch(setCount({ count: 103 }))

store.dispatch(resetCount())


//unsubscribe()

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch(incrementCount())

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "SET",
//   count: 101,
// });
