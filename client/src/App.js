import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';
import Hello from './component/Hello';
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';
// 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
