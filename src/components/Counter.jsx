import { useSelector } from 'react-redux';

const Counter = () => {
  let counter = useSelector(({ counter }) => counter);

  return (
    <div className="box">
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
