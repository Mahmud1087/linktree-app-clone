import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact--header">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>

            <form>
                <div className="form--firstname_lastname">
                    <label className="form--label">First Name
                        <input 
                            type="text"
                            id="first_name"
                            placeholder="Enter your first name"
                            className="form--name"
                        />
                    </label>

                    <label className="form--label">Last Name
                        <input 
                            type="text"
                            id="last_name"
                            placeholder="Enter your first name"
                            className="form--name"
                        />
                    </label>
                </div>
                
                <label className="form--label">Email
                    <input 
                        type="email"
                        id="email"
                        placeholder="yourname@email.com"
                        className="form--email"
                    />
                </label>

                <label className="form--label">Message
                    <textarea  
                        id="message" 
                        cols="30" 
                        rows="7"
                        placeholder="Send me a message and I'll reply you as soon as possible...">
                    </textarea>
                </label>

                <div className="form--check_sendBtn">
                    <label className="checkBox">You agree to providing you data to {"{name}"} who may contact you
                        <input 
                            type="checkbox"
                            className="check" 
                        />
                        <span className="box"></span>
                    </label>
                    <Link 
                        to="/success" 
                        element={<h2>Success!</h2>}>Send message
                    </Link>
                </div>
            </form>
        </div>
    )
}