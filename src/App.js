import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Login/>}/>
   <Route path='/signup' element= {<Signup/>}/>
    <Route path='/home' element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
