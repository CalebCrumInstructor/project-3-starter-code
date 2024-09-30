import AuthService from "../utils/auth";
import { useEffect } from "react";
import { SET_USER } from "../context/actions";
import { useGlobalContext } from "../context/GlobalContext";

export default function Auth({ children }) {
  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    console.log("hit");
    const handleSetAuthenticatedUser = () => {
      console.log("handleSetAuthenticatedUser 1");
      if (!AuthService.loggedIn()) return;
      console.log("handleSetAuthenticatedUser 2");

      dispatch({
        type: SET_USER,
        payload: {
          ...AuthService.getProfile(),
        },
      });
    };

    handleSetAuthenticatedUser();
  }, [dispatch]);

  return children;
}
