import React from 'react';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { countState, incrementCount, decrementCount } from '../lib/recoil-atoms';
import { Button } from 'react-bootstrap';

const useCounter = () => ({
  count: useRecoilValue(countState),
  increment: useSetRecoilState(incrementCount),
  decrement: useSetRecoilState(decrementCount),
  reset: useResetRecoilState(countState)
});

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button onClick={increment}>+1</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Counter;
