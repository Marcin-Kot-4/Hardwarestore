import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel";

// import Button from "./components/Button";

function App() {
    return (
        <section className="h-screen bg-white font-[Roboto] md:bg-top bg-center">
            <Header/>
            <Navbar/>
            <Carousel/>
        </section>
    );
}

export default App;
