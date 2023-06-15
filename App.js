import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

const productsArr = [
  {
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  return (
    <CartProvider>
      <div id="EcommerceContainer">
        <Header />

        <section id="music" className="container">
          <h2>MUSIC</h2>
          <div id="music-content">
            {productsArr.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </section>

        <Cart />

        <CartButton />

        <div id="container"></div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
