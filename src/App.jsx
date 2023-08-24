import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
// import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<HomePage/>}/>
    <Route path="/login" exact element={<LoginPage/>}/>
    <Route path="/profile" exact element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
