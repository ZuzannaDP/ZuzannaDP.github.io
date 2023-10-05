import { Grid } from "@mui/material";
import { Project } from "./Projects";
import { IMAGE_FOLDER } from "../files/File";

function FarmGame() {
    return (
        <Project titleImage="FarmGameTitle.png" 
                 githubLink="https://github.com/ZuzannaDP/2DGamePrototype"
                 height={9}
                 content={
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
                <Grid item>
                    <p>RPG, Farming sim, Adventure</p>
                </Grid>

                <Grid item>
                    <p>Made in Unity</p>
                </Grid>

                <Grid item container direction="column" alignItems="flex-start">
                    <p>Features includes:</p>
                    <ul>
                        <li>Inventory system.</li>
                        <li>Ability to pick up items.</li>
                        <li>Player health.</li>
                        <li>Player stamina.</li>
                    </ul>
                </Grid>

                <Grid item>
                    <div className="higher">
                        <video width="545" controls>
                            <source src={IMAGE_FOLDER + "demovideo.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Grid>
            </Grid>
        } />
    )
}

export default FarmGame;