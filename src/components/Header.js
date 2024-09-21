import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO, DEFAULT_AVTAR_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute py-2 pl-20 bg-gradient-to-b from-black w-screen flex justify-between z-10">
      <img className="w-48" src={APP_LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-full"
            alt="usericon"
            src={
              user.photoURL === null ||
              user.photoURL === undefined ||
              user.photoURL === ""
                ? DEFAULT_AVTAR_URL
                : user.photoURL
            }
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
