import { useNavigate } from "react-router-dom";
import { useState } from "react";
import 'boxicons';
import { motion } from "framer-motion"
import './LogIn.css';

const LogIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [iconName, setIconName] = useState("show");
    const [inputType, setInputType] = useState("password");
    const navigate = useNavigate();

    const EmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const PasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const PasswordCheck = () => {
        if (email.length > 1 && password.length > 1) {
            // send to ewa
            // set route to /home
            navigate("/home");

            props.onToken("token given");
        }
    }

    const HideToggle = () => {
        
        if (iconName === "show") {
            setIconName("hide");
        }
        else {
            setIconName("show");
        }
        if (inputType === "password") {
            setInputType("text");
        }
        else {
            setInputType("password");
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" onChange={EmailHandler}></input>
                <br />
                <div className="flex">
                    <label htmlFor="password">Password: </label>
                    <div className="password_con">
                        <input id="password" type={inputType} className="password_input" onChange={PasswordHandler}></input>
                        <box-icon name={iconName} onClick={HideToggle}></box-icon>
                    </div>
                </div>
         
                <br/>
                <motion.button type="button" className="login_btn" onClick={PasswordCheck}
                    animate={{
                        scale: 1,
                    }}
                    initial={{
                        scale: 0,
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                >Login</motion.button>
                
            </form>
        </>
    )
}

export default LogIn;