import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_PLAYER_SHEET } from "../graphql/mutations";
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
        marginTop: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    submitBtn: {
    cursor: "pointer",
    },
    container: {
        display: "flex",
        flexDirection: "Column",
        alignItems: "center",
    },
    minicontainer: {
        display: "flex",
        flexDirection: "Column",
        width: "80%", 
    },
    p1: {
        fontSize: "25px",
        color: "var(--secondary-color)",
    },
    p2: {
        fontSize: "15px",
        marginTop: "10px",
        color: "var(--secondary-color)"
    },
    formElementInput: {
        marginBottom: "10px",
        // width: "80%",
    },
    formElementTextarea: {
        marginBottom: "10px",
        height: "400px",
    },
    formElementCheckbox: {
        marginBottom: "10px",
        rows: "50",
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
        margin: "0.5rem",
    },
    scrollbar: {
        overflow: "auto",
        height: "700px",
        overflowY: "scroll",
    },
  };

export default function PlayerSheet() {

    const [createPlayerSheet] = useMutation(CREATE_PLAYER_SHEET);
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
        event.preventDefault();

        const formData = {
            name: playerData.playerName,
            description: playerData.playerDesc,
        };

        try {
            const { data } = await createPlayerSheet({
            variables: { ...formData },
            });

        } catch (e) {
            console.error('Error creating player sheet:', e);
        }
    };


  return (
    <Page isProtected={false} headContent={headContent}> {/* isProtected={true} */}
      {/* <div>Player Sheet</div> */}
      <div style={styles.minicontainer} className="rpgui-container framed mx-auto my-4">
                <form style={styles.form} onSubmit={handleSubmit}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 offset-md-1 col-md-10">
                                <p style={styles.p1} className="text-center">Player Name</p>
                                <input style={styles.formElementInput}
                                    name="playerName"
                                    type="text"
                                    onChange={handleChange}
                                    value={playerData.playerName}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 offset-md-1 col-md-10">
                                <p style={styles.p2} className="text-center">Player Description</p>
                                <textarea style={styles.formElementTextarea} rows="20" cols="40"
                                    name="playerDesc"
                                    type="text"
                                    onChange={handleChange}
                                    value={playerData.playerDesc}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p style={styles.p2}>Things Allowed 1</p>
                                <select style={styles.formElementCheckbox} size="4" multiple
                                    name="races"
                                    type="option"
                                    onChange={handleChange}
                                    value={playerData.playerDesc}>
                                        <option value="option1">Option1</option>
                                        <option value="option2">Option2</option>
                                        <option value="option3">Option3</option>
                                        <option value="option4">Option4</option>
                                        <option value="option5">Option5</option>
                                        <option value="option6">Option6</option>
                                        <option value="option7">Option7</option>
                                        <option value="option8">Option8</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6">
                                <p style={styles.p2}>Things Allowed 2</p>
                                <select style={styles.formElementCheckbox} size="4" multiple
                                    name="races"
                                    type="option"
                                    onChange={handleChange}
                                    value={playerData.playerDesc}>
                                        <option value="option1">Option1</option>
                                        <option value="option2">Option2</option>
                                        <option value="option3">Option3</option>
                                        <option value="option4">Option4</option>
                                        <option value="option5">Option5</option>
                                        <option value="option6">Option6</option>
                                        <option value="option7">Option7</option>
                                        <option value="option8">Option8</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6">
                                <p style={styles.p2}>Things Allowed 3</p>
                                <select style={styles.formElementCheckbox} size="4" multiple
                                    name="races"
                                    type="option"
                                    onChange={handleChange}
                                    value={playerData.playerDesc}>
                                        <option value="option1">Option1</option>
                                        <option value="option2">Option2</option>
                                        <option value="option3">Option3</option>
                                        <option value="option4">Option4</option>
                                        <option value="option5">Option5</option>
                                        <option value="option6">Option6</option>
                                        <option value="option7">Option7</option>
                                        <option value="option8">Option8</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6">
                                <p style={styles.p2}>Things Allowed 4</p>
                                <select style={styles.formElementCheckbox} size="4" multiple
                                    name="races"
                                    type="option"
                                    onChange={handleChange}
                                    value={playerData.playerDesc}>
                                        <option value="option1">Option1</option>
                                        <option value="option2">Option2</option>
                                        <option value="option3">Option3</option>
                                        <option value="option4">Option4</option>
                                        <option value="option5">Option5</option>
                                        <option value="option6">Option6</option>
                                        <option value="option7">Option7</option>
                                        <option value="option8">Option8</option>
                                </select>
                            </div>

                            <div className="col-12 col-md-6">
                                <p style={styles.p2}>Things Allowed 4</p>
                                <div>
                                    <input id="option1" style={styles.formElementCheckbox} className="rpgui-checkbox"
                                        name="option1"
                                        type="checkbox"
                                        onChange={handleChange}
                                        value={playerData.playerDesc}/>
                                            <label htmlFor="option1">Option1</label>
                                </div>
                                <div>
                                    <input id="option2" style={styles.formElementCheckbox} className="rpgui-checkbox"
                                        name="option2"
                                        type="checkbox"
                                        onChange={handleChange}
                                        value={playerData.playerDesc}/>
                                            <label htmlFor="option2">Option2</label>
                                </div>
                            </div>


                            {/* <input class="rpgui-checkbox" type="checkbox"><label>This is checkbox.</label></input> */}

                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <button type="submit" style={styles.buttonDiv}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
    </Page>
  );
}
