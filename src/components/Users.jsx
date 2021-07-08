import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/actionTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  // const [users, setUsers] = useState();
  const dispatch = useDispatch();
  // считываем из редакса пользователей (users)
  const users = useSelector((state) => state.users);

  const getUsersFromApi = async () => {
    const request = await fetch(apiUrl);
    const responce = await request.json();
    // записываем в редакс пользователей (users)
    dispatch({ type: TYPES.SET_USERS, payload: responce });
  };

  useEffect(() => {
    if (!users || users.length === 0) setTimeout(() => getUsersFromApi(), 1000);
  }, [users]);

  return (
    <div className="box">
      <h1>Users</h1>
      <table>
        <tbody>
          {users.length
            ? users.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <button
                    onClick={() =>
                      dispatch({ type: TYPES.DELETE_USER, payload: el.id })
                    }
                  >
                    DELETE
                  </button>
                </tr>
              ))
            : `Loading...`}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
