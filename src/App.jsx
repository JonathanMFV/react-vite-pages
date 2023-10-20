
import './css/global.css'

import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import HomePageNA from './views/HomePageNA';

const AppContent = () => {
  const location = useLocation();
  const hideNavFooter = ['/login', '/register'].includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePageNA />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

