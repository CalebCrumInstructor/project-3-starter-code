import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

import Page from "../components/Page";
import { QUERY_MY_CAMPAIGNS, QUERY_MY_PLAYER_SHEETS } from '../graphql/queries';

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
  buttonDiv1: {
    fontFamily: "var(--tertiary-font)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "25px",
    background: "radial-gradient(rgba(25, 0, 255, 0), rgb(25, 19, 56))",
    backgroundColor: "rgb(170, 170, 170)", // gray
  },
  buttonDiv2: {
    fontFamily: "var(--tertiary-font)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "25px",
    background: "radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 1) 12%, rgba(0, 0, 0, 1) 84%)",
    backgroundColor: "rgb(170, 170, 170)", // gray
  },
};

export default function Dashboard() {
  const { loading: loadingCampaign, data: campaignData } = useQuery(QUERY_MY_CAMPAIGNS);
  const { loading: loadingPlayerSheet, data: playerSheetData } = useQuery(QUERY_MY_PLAYER_SHEETS);

  
  return (
    <Page isProtected={true} headContent={headContent}> {/* isProtected={true} */}
      {/* <div>Dashboard</div> */}
      <div style={styles.container}>
        <h1 className="secondary-font secondary-color">
          Your Campaign Sheets!
        </h1>
        <div style={styles.minicontainer}>
          <div style={styles.buttonDiv1}>
            <Link to={"/campaignsheet"}>
              <button style={styles.buttonDiv1}>Create a Campaign now!</button>
            </Link>

          </div>
          
        </div>
            {campaignData ? campaignData.allCampaignsByUser.map(({ _id, name }) => (
                <div style={styles.minicontainer}>
                  <Link key={_id} to={`/campaign/${_id}`}>
                    <button style={styles.buttonDiv2}>{name}</button>
                  </Link>
                </div>
            ))
              :
              <div>loading</div>
            }
      </div>
      <div style={styles.container}>
        <h1 className="secondary-font secondary-color">
          Your Player Sheets!
        </h1>
        <div style={styles.minicontainer}>
          <div style={styles.buttonDiv1}> {/* */}

            <Link to={"/playersheet"}>
              <button style={styles.buttonDiv1}>Create a Player now!</button>
            </Link>
          </div>
          
        </div>
        {playerSheetData ? playerSheetData.allPlayerSheetsByUser.map(({ _id, name }) => (
                <div style={styles.minicontainer}>
                  <Link key={_id} to={`/player/${_id}`}>
                    <button style={styles.buttonDiv2}>{name}</button> {/* */}
                  </Link>
                </div>
            ))
              :
              <div>loading</div>
            }
      </div>


    </Page>
  );
};
