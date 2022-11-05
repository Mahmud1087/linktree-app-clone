import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./css/main.css"
import { Routes, Route } from "react-router-dom"
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={(
                    <div className="container">
                        <Header />
                        <Body />
                    </div>
                )}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <div className="container">
                <Footer />
            </div>
        </>
        
    )
}