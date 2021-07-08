import { TYPES } from './actionTypes';
const initState = {
  counter: 200,
  counter1: 200,
  counter2: 200,
  users: [],
};

// action = {type: 'INC' , payload: 'users data ....'}

export default function reducer(state = initState, { type, payload }) {
  console.log(' action => ', { type, payload });

  switch (type) {
    case TYPES.DELETE_USER:
      return { ...state, users: state.users.filter((el) => el.id !== payload) };
    case TYPES.SET_USERS:
      return { ...state, users: payload };
    case TYPES.INC:
      return { ...state, counter: state.counter + 1 };
    case TYPES.DEC:
      return { ...state, counter: state.counter - 1 };
    case TYPES.CHANGE_100:
      return { ...state, counter: state.counter + payload };
    case TYPES.CHANGE_200:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
}
