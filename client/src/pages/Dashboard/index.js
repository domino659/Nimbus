import { useDispatch } from 'react-redux';
import { disconnect } from '../../features/userSlice';

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => dispatch(disconnect())}>click</button>
    </>
  );
}
