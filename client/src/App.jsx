import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
        <div>
            <Navbar/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
        </>
    )
}

export default App;
