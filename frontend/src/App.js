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
import Help from "./components/Help/Help";
import AddProduct from "./components/AddProduct/AddProduct";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import AllProducts from "./components/AllProducts/AllProducts";


function App() {

    return (
        <Router>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Slider/><CardSlider/><Newsletter/></>}/>
                <Route path="/login" element={<><Login/><Newsletter/></>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/produkt/:product" element={<><ProductDetails/><Newsletter/></>}/>
                <Route path="/koszyk" element={<><Cart/><Newsletter/></>}/>
                <Route path="/dostawaiplatnosc" element={<><DeliveryAndPayment/><Newsletter/></>}/>
                <Route path="/mojekonto" element={<Profile  styleBold={'orders'}/>}/>
                <Route path="/mojekonto/zamowienia" element={<Profile styleBold={'orders'}/>}/>
                <Route path="/mojekonto/opinie" element={<Reviews styleBold={'reviews'}/>}/>
                <Route path="/mojekonto/listauzytkownikow" element={<UsersList styleBold={'usersList'}/>}/>
                <Route path="/mojekonto/dodajprodukt" element={<AddProduct styleBold={'addProduct'}/>}/>
                <Route path="/mojekonto/ustawieniakonta" element={<AccountSettings styleBold={'accountSettings'}/>}/>
                <Route path="/mojekonto/produkty" element={<AllProducts styleBold={'allProducts'}/>}/>
                <Route path="/jakkupowac" element={<Help/>}/>
                <Route path="/:categoryName/:subCategoryName" element={<><Products/><Newsletter/></>}/>



                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
