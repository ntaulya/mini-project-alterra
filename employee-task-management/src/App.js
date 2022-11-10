import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin/Dashboard';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import UserDashboard from './pages/user/Dashboard';
import UserTask from './pages/user/Task';
import AdminProfile from './pages/admin/Profile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/user/dashboard' element={<UserDashboard />}></Route>
      <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
      <Route path='/admin/profile' element={<AdminProfile />}></Route>
      <Route path='/user/task' element={<UserTask />}></Route>
    </Routes>
  );
}

export default App;
