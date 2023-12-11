import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/CounterSlice.js";

// const initialState = { count: 0};

// function reducer(state, action) {
//     switch(action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         case 'reset':
//             return {count:0}
//             default:
//                 return state;
//     }
// };

function Counter (props) {
    // const [state, dispatch] = useReducer(reducer, initialState);

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count {count}</p>
            <button onClick={() => {
                dispatch(increment());
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement());
            }}>Increment</button>
            <button onClick={() => {
                dispatch(reset());
            }}>Reset</button>
        </div>
    )
}

export default Counter;