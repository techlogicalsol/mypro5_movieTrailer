import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import PopDetail from './Components/PopDetail';
import TrendDetail from './Components/TrendDetail';
import TV from './Components/TV';

function App() {

  return (
    <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popdetail/:id" element={<PopDetail />}/>
          <Route path="/trendDetail/:id" element={<TrendDetail />}/>
          <Route path="/tv" element={<TV />} />
          <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        
     

    </div>
  );
}

export default App;
