import { Grid } from "@mui/material";
import { Project } from "./Projects";

function CardGame() {
    return (
        <Project titleImage="CardGameTitle.png" 
                 githubLink="https://github.com/ZuzannaDP/CardGame"
                 height={4}
                 content={
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
                <Grid item>
                    <p>Turn-based, Adventure, RPG</p>
                </Grid>

                <Grid item>
                    <p>Made in Unity</p>
                </Grid>

                <Grid item container direction="column" alignItems="flex-start">
                    <p>Features includes:</p>
                    <ul>
                        <li>Moving card within a grid.</li>
                        <li>Picking up cards from land and creature piles.</li>
                        <li>Player hand.</li>
                    </ul>
                </Grid>
            </Grid>
        } />
    )
}

export default CardGame;