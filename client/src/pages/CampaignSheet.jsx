import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CAMPAIGN } from "../graphql/mutations";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";

import Page from "../components/Page";

const headContent = (
    <>
        <title>Campaign Sheet</title>
        <meta name="description" content="This is the Campaign Sheets of the app." />
    </>
);

const styles = {
    form: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    width: "100%",
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
        alignItems: "center",
        width: "80%",
    },
    p1: {
        fontSize: "25px",
        color: "var(--secondary-color)"
    },
    p2: {
        fontSize: "25px",
        marginTop: "10px",
        color: "var(--secondary-color)"
    },
    formelement1: {
        marginBottom: "10px",
    },
    formelement2: {
        marginBottom: "10px",
        rows: "10",
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
    }
};

export default function CampaignSheet() {

    const [addCampaign, { error }] = useMutation
    (ADD_CAMPAIGN, {
    });

    const [campaignData, setCampaignData] = useState({
        campaignName: ''
    })

    const handleChange = (event) => {
        console.log('hit')
        const { name, value } = event.target;

        setCampaignData({
            ...campaignData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addCampaign({
            variables: { ...campaignData },
            });

        } catch (e) {
            console.error(e);
        }
    };


    return (
        <Page isProtected={false} headContent={headContent} className="rpgui-content container"> {/* isProtected={true} */}
        {/* <div>Campaign Sheet</div> */}
            <div style={styles.container}>
                <div style={styles.minicontainer} className="rpgui-container framed">
                    <div>
                        <form style={styles.form} onSubmit={handleSubmit}>
                            <p style={styles.p1}>Campaign Name</p>
                            <input style={styles.formelement}
                                name="campaignName"
                                type="text"
                                onChange={handleChange}
                                value={campaignData.campaignName}
                            />
                            <p style={styles.p2}>Campaign Description</p>
                            <textarea style={styles.formelement2} rows="20" cols="45"
                                name="campaignDesc"
                                type="text"
                                onChange={handleChange}
                                value={campaignData.campaignDesc}
                            />
                            <button type="submit" style={styles.buttonDiv}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Page>
    );
}
