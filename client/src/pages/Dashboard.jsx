import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { Link } from "react-router-dom";
import Page from "../components/Page";
import { QUERY_MY_CAMPAIGNS } from '../graphql/queries';

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
    marginBottom: "25px",
  },
  buttonDiv: {
    fontFamily: "var(--tertiary-font)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "25px",
    background: "radial-gradient(rgba(25, 0, 255, 0), rgb(25, 19, 56))",
    backgroundColor: "rgb(170, 170, 170)", // gray
  },
};

export default function Dashboard() {
  const { loading, data: campaignData } = useQuery(QUERY_MY_CAMPAIGNS);
  console.log(campaignData);
  return (
    <Page isProtected={false} headContent={headContent}> {/* isProtected={true} */}
      {/* <div>Dashboard</div> */}
      <div style={styles.container}>
        <h1 className="secondary-font secondary-color">
          Your Campaign Sheets!
        </h1>
        <div style={styles.minicontainer}>
          <div style={styles.buttonDiv}>
            <Link to={"/campaignsheet"}>
              <button style={styles.buttonDiv}>Create a Campaign now!</button>
            </Link>

          </div>
          
        </div>
      </div>
      <div style={styles.container}>
        <h1 className="secondary-font secondary-color">
          Your Player Sheets!
        </h1>
        <div style={styles.minicontainer}>
          <div style={styles.buttonDiv}> {/* */}

            <Link to={"/playersheet"}>
              <button style={styles.buttonDiv}>Create a Player now!</button>
            </Link>
          </div>
          
        </div>
      </div>

    </Page>
  );
}
