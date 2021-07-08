import { useDispatch } from 'react-redux';
import { TYPES } from '../redux/actionTypes';
const { INC, DEC, CHANGE_200, CHANGE_100 } = TYPES;
const Control = () => {
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h1>Control</h1>
      <button onClick={() => dispatch({ type: INC })}>INC</button>
      <button onClick={() => dispatch({ type: DEC })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: CHANGE_100, payload: 100 })}>
        CHANGE 100
      </button>
      <button onClick={() => dispatch({ type: CHANGE_200, payload: 200 })}>
        CHANGE 200
      </button>
    </div>
  );
};

export default Control;
