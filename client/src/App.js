import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/userSlice';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <span>{user.value}</span>
      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
}

export default App;
