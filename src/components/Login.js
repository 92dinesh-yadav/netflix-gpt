import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm, validateSignUpForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage("");
    }

    const handleSignInSignUpClick = () => {
        let message = null;
        if(isSignInForm) {
            message = validateLoginForm(email.current.value, password.current.value);
        } else {
            message = validateSignUpForm(fullName.current.value, email.current.value, password.current.value);
        }
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm) {
            // Signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-"+errorMessage);
            });
        } else {
            //Signin
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-"+errorMessage);
            });
        }
    }

    return (
        <div>
           <Header/>
           <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
                alt="login-bg"/>
           </div>

            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && 
                    <input 
                        ref={fullName}
                        type="text" placeholder="Full Name" 
                        className="p-3 my-3 w-full bg-gray-700" 
                    />
                }
                <input 
                    ref={email}
                    type="text" placeholder="Email address" 
                    className="p-3 my-3 w-full bg-gray-700" 
                />
                <input 
                    ref={password}
                    type="password" placeholder="Password" 
                    className="p-3 my-3 w-full bg-gray-700" 
                />
                <p className="font-bold text-red-500">{errorMessage}</p>
                <button className="p-3 my-3 w-full bg-red-600 rounded-lg"
                    onClick={handleSignInSignUpClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In now."}
                </p>
            </form>

        </div>
    );
}
export default Login;