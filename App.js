import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Tempo from  './degree/Tempo';
import Register from './user/Register';

function App() {
  return (
    <div className='header'>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/tempo" element={<Tempo/>}/>
      </Routes>
       
    </div>
  );
}
export default App;

