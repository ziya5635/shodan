//this module not being used currently

import { useReducer } from "react";
function reducer(state, { type }) {
    switch (type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    const [counter, dispatch] = useReducer(reducer, 0);
    const onClick = (evt) => {
        const action = evt.target.name === "INCREMENT" ? { type: "INCREMENT" } : { type: "DECREMENT" };
        dispatch(action);
    }
    return (
        <section>
            <h1>counter: {counter}</h1>
            <button name="INCREMENT" onClick={onClick}>increment</button>
            <button name="DECREMENT" onClick={onClick}>decrement</button>
        </section>
    )
}

export default Counter;