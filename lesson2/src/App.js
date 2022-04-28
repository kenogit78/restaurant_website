
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import FriedRice from './images/friedrice.jpg'
import Burger from './images/burger.jpg'
import Crab from './images/crabs.jpg'
import Jollof from './images/jollofrice.jpg'
import Salad from './images/vegetableSalad.jpg'
import Potato from './images/potato.jpg'
import ProductDetails from './components/Product/ProductDetails';



function App() {

  const foods = [
    {id: 1, foodname: 'Fried rice', image: FriedRice, price: '$5' },
    {id: 2, foodname: 'Burger', image: Burger, price: '$4' },
    {id: 3, foodname: 'Crab', image: Crab, price: '$4' },
    {id: 4, foodname: 'Jollof', image: Jollof, price: '$6' },
    {id: 5, foodname: 'Salad', image: Salad, price: '$5' },
    {id: 6, foodname: 'Potato', image: Potato, price: '$3' },
    {id: 7, foodname: 'FriedRice', image: FriedRice, price: '$5' },
    {id: 8, foodname: 'Burger', image: Burger, price: '$4' },
    {id: 9, foodname: 'Crab', image: Crab, price: '$4' },
    {id: 10, foodname: 'Jollof', image: Jollof, price: '$6' },
    {id: 11, foodname: 'Salad', image: Salad, price: '$5' },
    {id: 12, foodname: 'Potato', image: Potato, price: '$3' }
  ]

  return (

   <div>
     <BrowserRouter>
      <Navbar />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product foods={foods} />} />
        <Route path="/product/:name/:price" element={<ProductDetails foods={foods} />} />
        <Route path="/contact" element={<Contact  />} />
     </Routes>

     </BrowserRouter>
     
   </div>
  );
}

export default App;
