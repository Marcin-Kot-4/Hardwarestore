import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

// import Button from "./components/Button";

function App() {
    return (
        <section className="h-screen bg-white font-[Roboto] md:bg-top bg-center">
            <Header/>
            <Navbar/>
            <div className="text-xl">
                {/*<Button/>*/}
            </div>
        </section>
    );
}

export default App;
