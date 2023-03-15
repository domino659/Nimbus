import { Routes, Route, Navigate } from 'react-router-dom';
import HideIfLogged from './components/common/HideIfLoggin';
import HideIfNotLogged from './components/common/HideIfNotLogged';
import Navbar from './components/common/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <HideIfLogged>
        <Routes>
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HideIfLogged>
      <HideIfNotLogged>
        <>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </>
      </HideIfNotLogged>
    </>
  );
}

export default App;
