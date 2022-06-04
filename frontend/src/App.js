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

function App() {
    return (
        <Router>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Slider/><CardSlider/><Newsletter/></>}/>
                <Route path="/login" element={<><Login/><Newsletter/></>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/:categoryName/:subCategoryName" element={<Products/>}/>
                <Route path="/:product" element={<><Products categoryName="Laptopy" subCategoryName="Laptopy Biznesowe"/></>}/>


                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
