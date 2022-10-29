import zuri from "../assets/logo.36d2d48a.png"
import ingressive from "../assets/I4G.png"

export default function Footer() {
    return (
        <div className="footer">
            <img 
            src={zuri} 
            alt="Zuri internship" 
            className="zuri" 
            />
            <p>HNG Internship 9 Frontend Task</p>
            <img 
            src={ingressive} 
            alt="Ingressive For Good" 
            className="ingressive" 
            />
        </div>
    )
}