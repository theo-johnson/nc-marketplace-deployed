import { useState, userContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import AboutUs from './components/AboutUs';
// import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ItemPage from './components/ItemPage';
import LatestDeals from './components/LatestDeals';
import Listings from './components/Listings';
import NavBar from './components/NavBar';
import NewListing from './components/NewListing';

import { UserContext } from './contexts/CurrentUser';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [basket, setBasket] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LatestDeals />} />
        <Route path="/items/:item_id" element={<ItemPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/new-listing" element={<NewListing />} />
        <Route path="/items" element={<Listings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
