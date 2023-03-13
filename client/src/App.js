import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HideIfLogged from './components/common/HideIfLoggin';
import HideIfNotLogged from './components/common/HideIfNotLogged';
import Navbar from './components/common/Navbar';
import { login } from './features/userSlice';
import Dashboard from './pages/Dashboard';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <HideIfLogged>
        <span>NotLogged {user.value}</span>
        <button onClick={() => dispatch(login())}>click</button>
      </HideIfLogged>
      <HideIfNotLogged>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </>
      </HideIfNotLogged>
    </>
  );
}

export default App;
