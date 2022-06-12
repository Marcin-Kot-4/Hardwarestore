import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import CardSlider from "./components/CardSlider/CardSlider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import DeliveryAndPayment from "./components/DeliveryAndPayment/DeliveryAndPayment";
import Profile from "./components/Profile/Profile";
import Reviews from "./components/Reviews/Reviews";
import UsersList from "./components/UsersList/UsersList";

function App() {
    const authorized = true;
    const role = 'admin';

    return (
        <Router>
            <Header authorized={authorized}/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Slider/><CardSlider/><Newsletter/></>}/>
                <Route path="/logged" element={<><Slider/><CardSlider/><Newsletter/></>}/>
                <Route path="/login" element={<><Login/><Newsletter/></>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/:categoryName/:subCategoryName" element={<><Products/><Newsletter/></>}/>
                <Route path="/produkt/:product" element={<><ProductDetails/><Newsletter/></>}/>
                <Route path="/koszyk" element={<><Cart/><Newsletter/></>}/>
                <Route path="/dostawaiplatnosc" element={<><DeliveryAndPayment/><Newsletter/></>}/>
                <Route path="/mojekonto" element={<Profile authorized={authorized} role={role}/>}/>
                <Route path="/mojekonto/opinie" element={<Reviews authorized={authorized} role={role}/>}/>
                <Route path="/mojekonto/listauzytkownikow" element={<UsersList/>}/>



                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
