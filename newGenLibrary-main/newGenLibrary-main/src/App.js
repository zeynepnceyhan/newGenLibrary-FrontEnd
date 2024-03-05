import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import BookPage from './pages/bookPage/BookPage';
import Favourites from './pages/favourites/Favourites';
import Home from './pages/home/Home';
import AuthorizationPage from './pages/Authorization/AuthorizationPage'; // Ekledik
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import background from './backgroundimage.jpg'


function App() {

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
    }}>
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<AuthorizationPage />} />
        <Route path="/reading/:slug" element={<BookPage />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/*" element={<NotFound />} />
        <Route exact path="/project-gutenberg-book-app" element={<Navigate to="/" replace />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
