import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { actionIncrement,actionDecrement,actionReset } from '../actions/actionCounter';

export const Counter = () => {

    const {count} = useSelector(store => store.counter)

    const dispatch = useDispatch();

    return (
        <div>
            <input name="inputDisplay" value={count}/>
            <button onClick={() => dispatch(actionIncrement())}>Increment</button>
            <button onClick={() => dispatch(actionDecrement())}>Decrement</button>
            <button onClick={() => dispatch(actionReset())}>Reset</button>
        </div>
    )
}
