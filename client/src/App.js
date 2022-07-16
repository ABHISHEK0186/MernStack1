import Navbar from './components/Navbar';
import Home from './components/Home';
import Fetch from './components/Fetch';
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
     <div className='page'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fetch' element={<Fetch/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
