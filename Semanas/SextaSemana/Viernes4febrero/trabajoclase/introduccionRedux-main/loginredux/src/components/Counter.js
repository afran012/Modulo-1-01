import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../actions/actionCounter';

const Counter = () => {
    
    const dispatch = useDispatch()
    const {contador} = useSelector((num)=>num.counter)
    console.log(contador);

  return (
      <>
        <input type="number" readOnly value={contador}/>
        <button name='increment'  onClick={(e)=>{ e.preventDefault(); dispatch(increment());}}>Sumar</button>
        <button name='decrement' onClick={(e)=>{ e.preventDefault(); dispatch(decrement())}}>Restar</button>
        <button name='reset' onClick={(e)=>{ e.preventDefault(); dispatch(reset())}}>Reset</button>
      </>
  );
};

export default Counter;
