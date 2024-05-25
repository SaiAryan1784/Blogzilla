import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Home from "./components/Home";  // Assuming you have a Home component
import AuthDetails from "./components/AuthDetails";

const App = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Navigate to="/home" /> : <Navigate to="/login" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/home"
                    element={authUser ? <Home /> : <Navigate to="/login" />}
                />
            </Routes>
            <AuthDetails />
        </Router>
    );
};

export default App;
