import {React , useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../../components/Register';
import Login from '../../components/Login';
import Homepage from '../../components/Homepage';
import NotFound from '../../components/NotFound';
import { AppContext } from '../../ContextApi/AppContext';
import DescPages from '../../views/DescPages';

const Home = () => {
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const sharedData = {
    cart,
    setCart,
  };
  return (
    <BrowserRouter>
      <AppContext.Provider value={sharedData}>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homePage" element={<Homepage />} />
          <Route path="/DescPage" element={<DescPages/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default Home;
