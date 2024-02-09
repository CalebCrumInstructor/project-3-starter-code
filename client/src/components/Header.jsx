import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

const styles = {
   h1: {
    // display: "flex",
    // text: "center",

   },
  container: {
    // background: "linear-gradient(180deg, rgb(75, 75, 75), transparent 100%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: 100
  },
  buttonDiv: {
    fontFamily: "var(--tertiary-font)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    fontSize: "25px",
    background: "radial-gradient(rgba(25, 0, 255, 0), rgb(25, 19, 56))",
    backgroundColor: "rgb(170, 170, 170)", // gray
    margin: "0.5rem",
  },
  undecoratedLink: {
    textDecoration: "none",
  },
};

export default function Header() {
  const { isAuthenticated } = useSelector(getUser());

  const handleLogout = (e) => {
    AuthServices.logout();
  };

  return (
    <nav style={styles.container} className="rpgui-container framed">  {/*  */}
      <Link to={"/"} style={styles.undecoratedLink} className="title">
        <h1 className="quinary-font site-header my-2 ms-2" >Guild Journeys</h1>
      </Link>
      <div style={styles.buttonDiv}>
        {!isAuthenticated && ( /* isAuthenticated */
          <Link to={"/dashboard"}>
            <button style={styles.button}>Dashboard</button>
          </Link>
        )}
        {isAuthenticated && (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        )}
        {!isAuthenticated && (
          <Link to={"/signup"}>
            <button style={styles.button}>Sign Up</button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={"/login"}>
            <button style={styles.button}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
