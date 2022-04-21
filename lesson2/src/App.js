
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePlan from './components/CreatePlan/CreatePlan';



function App() {
  return (

   <div>
     <BrowserRouter>
      <Navbar />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createplan" element={<CreatePlan />} />
     </Routes>

     </BrowserRouter>
     
   </div>
  );
}

export default App;
