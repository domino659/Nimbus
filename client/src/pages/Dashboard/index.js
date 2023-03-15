import { useDispatch } from 'react-redux';
import './style.scss';
import { disconnect } from '../../features/userSlice';

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <div>Dashboard</div>
      <button onClick={() => dispatch(disconnect())}>click</button>
      <h1 className="title">Build your new deployment !</h1>
      <p>To deploy a new Project, get started with one of our Templates.</p>
      <div className="template-container">
        <span>Text</span>
      </div>
    </div>
  );
}
