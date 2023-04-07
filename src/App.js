
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Second from './Second';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/second_page' element={<Second/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
