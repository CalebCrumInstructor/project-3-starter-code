import { useState } from "react";
import { useMutation } from "@apollo/client";
// import { ADD_PLAYER } from "../graphql/mutations";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";

import Page from "../components/Page";


const headContent = (
  <>
    <title>Player Sheet</title>
    <meta name="description" content="This is the Player Sheets of the app." />
  </>
);

const styles = {
    form: {
      display: "flex",
      flexDirection: "Column",
      width: "300px",
    },
    submitBtn: {
      cursor: "pointer",
    },
  };

export default function PlayerSheet() {

    const [playerData, setPlayerData] = useState({
        playerName: ''
    })

    const handleChange = (event) => {
        console.log('hit')
        const { name, value } = event.target;

        setPlayerData({
            ...playerData,
            [name]: value
        })
    }

    const handleSubmit = async(event) => {
      // event.preventDefault();

      // try {
      //   const { data } = await addPlayer({
      //     variables: { ...formState },
      //   });

      // } catch (e) {
      //   console.error(e);
      // }
    };


  return (
    <Page isProtected={false} headContent={headContent}> {/* isProtected={true} */}
      {/* <div>Player Sheet</div> */}
      <form style={styles.form}>
        <input
            name="playerName"
            type="text"
            onChange={handleChange}
            value={playerData.playerName}
        />
      </form>
    </Page>
  );
}
