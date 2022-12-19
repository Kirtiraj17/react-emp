import RegisterUser from './pages/RegisterUser';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/register' element={<RegisterUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
