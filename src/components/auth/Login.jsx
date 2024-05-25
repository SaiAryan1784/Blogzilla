import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LogIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/home");  // Redirect to home after login
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <form onSubmit={LogIn}>
                <h1>Login to your Account</h1>
                <input
                className=""
                type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
            <p>New User ? <button onClick={() => navigate("/signup")}>Sign Up</button></p>
        </>
    );
};

export default Login;
