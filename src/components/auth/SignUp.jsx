import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const SignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/login");  // Redirect to login after sign up
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <form onSubmit={SignUp}>
                <h1>Create Account</h1>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <button onClick={() => navigate("/login")}>Log In</button></p>
        </>
    );
};

export default SignUp;
