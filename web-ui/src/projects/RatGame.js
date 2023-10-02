import { useState } from "react";
import { getDescription, getName, getReleaseNotes } from "./Helper";
import Markdown from 'react-markdown'
import { Container, Grid } from "@mui/material";
import { ReleaseNotes } from "./Sections";
import Window from "../files/Window";
import { IMAGE_FOLDER } from "../files/File";
import { Project } from "./Projects";

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
        <Project titleImage="ratGameTitle.png" 
                 githubLink="https://github.com/ZuzannaDP/RatPipeGame"
                 height={5}
                 content={
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
                <Grid item container direction="column" alignItems="center">
                    <a className="higher" href="https://zuzannadp.itch.io/ratventure-in-the-pipes">
                        <img src={IMAGE_FOLDER + "Play.png"}></img>
                    </a>
                    <p className="higher low-vis">Pasword is 'rat-moon-fruit!'</p>
                </Grid>

                <Grid item>
                    <p>Puzzle, Adventure</p>
                </Grid>

                <Grid item>
                    <p>Made in Unity</p>
                </Grid>

                <Grid item>
                    <p><em>{desc}</em></p>
                </Grid>

                <Grid item container direction="column" alignItems="flex-start">
                    <p>Features includes:</p>
                    <ul>
                        <li>Moving and rotating pipes.</li>
                        <li>Controlling a rat character.</li>
                    </ul>
                </Grid>

                {/* <Grid item>
                    <p>Release Notes</p>
                </Grid>

                <Grid item>
                    <ReleaseNotes title="V0.1 - 19/09/23" notes={notes} />
                </Grid> */}
            </Grid>
        } />
    )
}

export default RatGame;