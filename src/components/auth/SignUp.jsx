import { useState } from "react"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUp = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <>
        
        <form onSubmit={SignUp}>
            <h1>Create Account</h1>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>

            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>

            <button type="submit">Sign Up</button>

        </form>
    </>
  )
}

export default SignUp;