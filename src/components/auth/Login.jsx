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
        <div className="bg-blue-500 text-center m-10 p-10 rounded-lg">
            <form onSubmit={LogIn} >
              <div className="flex flex-col items-center justify-center bg-gray-100 p-7 m-10 mt-15">
                <h1 className="block mb-4">Login to your Account</h1>
                <div className="block m-2 w-full max-w-xs">
                <input className="block w-full p-2 border border-gray-300 rounded mb-2" type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" />
                <input className="block w-full p-2 border border-gray-300 rounded" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                </div>
                <div className="block m-2">
                        <button className="block w-full p-4 bg-blue-600 text-white hover:bg-green-500 rounded " type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <p className="mt-4">
                New User? <button onClick={() => navigate("/signup")} className="text-blue-700 underline">Sign Up</button>
            </p>
            </div>
        </>
    );
};

export default Login;
