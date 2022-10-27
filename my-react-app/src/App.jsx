import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./css/main.css"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
        
    )
}