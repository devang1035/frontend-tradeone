import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './landing page/Home/Homepage';
import Signup from './landing page/sign up/Signup';
import AboutPage from './landing page/about/Aboutpage';
import ProductPage from './landing page/products/Productspage';
import PricingPage from './landing page/pricing/Pricingpage';
import SupportPage from './landing page/support/Supportpage';
import Notfound from './landing page/Notfound';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import Login from  "./landing page/Login";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <Navbar />
 <Routes>
 <Route path="/" element={<HomePage/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/about" element={<AboutPage/>} />
  <Route path="/product" element={<ProductPage/>} />
  <Route path="/pricing" element={<PricingPage/>} />
  <Route path="/support" element={<SupportPage/>} />
  <Route path="*" element={<Notfound/>} />
 </Routes>
 <Footer />
 </BrowserRouter>
)
