import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import CardSlider from "./components/CardSlider/CardSlider";

function App() {
    return (
        <section className="h-screen bg-white font-[Roboto] md:bg-top bg-center">
            <Header/>
            <Navbar/>
            <Slider/>
            <CardSlider/>
            <Newsletter/>
            <Footer/>
        </section>
    );
}

export default App;
