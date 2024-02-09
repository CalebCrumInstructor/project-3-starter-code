import { Link } from "react-router-dom";
import Page from "../components/Page";

const headContent = (
  <>
    <title>Change Me! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
  },
  minicontainer: {
    display: "flex",
    flexDirection: "Row",
    alignItems: "center",
  },
  buttonDiv: {
    fontFamily: "var(--tertiary-font)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button1: {
    fontSize: "25px",
    background: "radial-gradient(rgba(25, 0, 255, 0), rgb(25, 19, 56))",
    backgroundColor: "rgb(170, 170, 170)", // gray
    margin: "0.5rem",
  },
  button2: {
    fontSize: "25px",
    background: "radial-gradient(rgba(25, 0, 255, 0), rgb(25, 19, 56))",
    backgroundColor: "rgb(170, 170, 170)", // gray
    margin: "0.5rem",
  },
};

export default function Dashboard() {
  return (
    <Page isProtected={false} headContent={headContent}> {/* isProtected={true} */}
      {/* <div>Dashboard</div> */}
      <div style={styles.container}>
        <h1 className="secondary-font secondary-color">
          Your Player Sheets!
        </h1>
        <div style={styles.minicontainer}>
          <div style={styles.buttonDiv}>
            <Link to={"/playersheet"}>
              <button style={styles.button1}>Create One Now!</button>
            </Link>


          </div>
          
        </div>
      </div>
    </Page>
  );
}
