import './App.css';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchAppBar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:is" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
