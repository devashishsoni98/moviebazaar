import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { AuthContextProvider } from './components/Context/AuthContext';
import Protected from './components/protected';
import MovieDetailsPage from './components/HomePage/Cards/MovieDetailsPage';



function App() {
  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<HomePage/>}/>
    <Route path="/login" exact element={<LoginPage/>}/>
    <Route path="/profile" exact element={<Protected><ProfilePage/></Protected>}/>
    <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    </>
  );
}

export default App;
