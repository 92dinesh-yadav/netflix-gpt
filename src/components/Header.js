import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector(store=>store.user);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
    
    return (
        <div className="absolute py-2 pl-20 bg-gradient-to-b from-black w-screen flex justify-between z-10">
            <img className="w-48" 
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>


            {
                user && 
                <div className="flex p-2">
                    <img className="w-12 h-12 rounded-full" 
                    alt="usericon" src="https://avatars.githubusercontent.com/u/19631177?s=400&u=e58e64dac6fb9062bdcf84c6e0cd0f6d7bb2903e&v=4"/>
                    <button className="font-bold text-white" onClick={handleSignOut}>(Sign out)</button>
                </div>
            }
            
            
        </div>
        
    );
}
export default Header;