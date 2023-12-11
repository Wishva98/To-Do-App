import './Signin.css';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth} from "../firebase.tsx";
export function Signin() {
    function handleSignIn(){
        signInWithPopup(auth,new GoogleAuthProvider());
        // alert("okay")
    }
    return (
        <div className="d-flex flex-column gap-2 vh-100 align-items-center justify-content-center">
            <h2>Welcome to-do App</h2>
            <button className="btn btn-primary" onClick={handleSignIn}>
                <i className="bi bi-google mx-2"></i> Sign In
            </button>
        </div>
    );
}