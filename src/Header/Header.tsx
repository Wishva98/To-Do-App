import './Header.css'
import {auth,} from "../firebase.tsx";
import {signOut} from 'firebase/auth';

export function Header() {
    function handleSignOut(){
        signOut(auth);
    }
    return (
        <header className="p-2 border-bottom d-flex justify-content-between align-items-center">
            <h1 className="m-0">To Do App</h1>
            <button className="btn btn-info" onClick={handleSignOut}>
                Sign Out
            </button>
        </header>
    );
}