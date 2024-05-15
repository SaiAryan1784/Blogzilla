import { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const LogIn = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <>
        <form onSubmit={LogIn}>
            <h1>Login to your Account</h1>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>

            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>

            <button type="submit">Submit</button>

        </form>
    </>
  )
}

export default Login;