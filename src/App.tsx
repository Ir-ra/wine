import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';

import { NavBar } from './components/NavBar/NavBar';
import { CartPage } from './pages/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';

import { HomePage } from './pages/HomePage';

import { Catalog } from './pages/Catalog';
import { WineDetailsPage } from './pages/WineDetailsPage';

import { WineBlogPage } from './pages/WineBlog';
import { WineryDetailsPage } from './pages/WineryDeyailsPage';

import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":itemId" element={<WineDetailsPage />} />
          </Route>

          <Route path="/wineBlog">
            <Route index element={<WineBlogPage />} />
            <Route path=":id" element={<WineryDetailsPage />} />
          </Route>

          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
