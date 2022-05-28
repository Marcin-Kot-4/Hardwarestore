import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

// import Button from "./components/Button";

function App() {
    return (
        <section className="h-screen bg-white font-[Roboto] md:bg-top bg-center">
            <Header/>
            <Navbar/>
            <Slider/>
            <Newsletter/>
            <Footer/>
        </section>
    );
}

export default App;
