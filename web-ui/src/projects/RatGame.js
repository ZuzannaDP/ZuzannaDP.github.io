import { useState } from "react";
import { getDescription, getName, getReleaseNotes } from "./Helper";
import Markdown from 'react-markdown'
import { Container, Grid } from "@mui/material";
import { ReleaseNotes } from "./Sections";

function RatGame() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState("");

    getName("rat_game").then((res) => {
        setName(res)
    })

    getDescription("rat_game").then((res) => {
        setDesc(res)
    })

    getReleaseNotes("rat_game", "1").then((res) => {
        setNotes(res)
    })

    return (
        <Container maxWidth="md">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <p>{name}</p>
                </Grid>

                <Grid item>
                    <p>{desc}</p>
                </Grid>

                <Grid item>
                    <p>Release Notes</p>
                </Grid>

                <Grid item>
                    <ReleaseNotes title="V0.1 - 19/09/23" notes={notes} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default RatGame;