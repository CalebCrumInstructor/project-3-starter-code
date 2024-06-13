import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYER } from '../graphql/queries';

import Page from "../components/Page";

const headContent = (
    <>
        <title>Player Sheet</title>
        <meta name="description" content="This is a Player Sheet of the app." />
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
        alignItems: "center",
    },
    p2: {
        fontSize: "15px",
        marginTop: "10px",
        color: "var(--secondary-color)"
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

export default function Player() {

    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_PLAYER, {

        // pass URL parameter
        variables: { id } // data.player.description/name/id
    });

    console.log(data);

    // return(
    //     <div>Player</div>
    // )

    return (
        <Page isProtected={false} headContent={headContent}> {/* isProtected={true} */}
        {/* <div>Player Sheet</div> */}
            <div style={styles.minicontainer} className="rpgui-container framed mx-auto my-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div style={styles.form}> {/* onSubmit={handleSubmit} */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 offset-md-1 col-md-10">
                                    <p style={styles.p1} className="text-center">Player Name</p>
                                    <p style={styles.p1} className="text-center">{data.player.name}</p> {/* or data?.player?.name */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 offset-md-1 col-md-10">
                                    <p style={styles.p2} className="text-center">Player Description</p>
                                    <p style={styles.p2}>{data.player.description}</p> {/* or data?.player?.description */}
                                </div>
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </Page>
    );
}