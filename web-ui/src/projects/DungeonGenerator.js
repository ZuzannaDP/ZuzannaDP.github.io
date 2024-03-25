import { Grid } from "@mui/material";
import { Project } from "./Projects";
import { IMAGE_FOLDER } from "../files/File";

function DungeonGenerator() {
    return (
        <Project titleImage="DunGenTitle.png" 
                 githubLink="https://github.com/ZuzannaDP/dungeon-generator"
                 height={10}
                 content={
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
                <Grid item>
                    <p>Procedural Generation</p>
                </Grid>

                <Grid item>
                    <p>Made in C++</p>
                </Grid>

                <Grid item container direction="column" alignItems="flex-start">
                    <p>Features includes:</p>
                    <ul>
                        <li>Choosing a seed for generation.</li>
                        <li>BSP tree generation for room layout.</li>
                        <li>ASCII display.</li>
                    </ul>
                </Grid>

                <Grid item>
                    <div className="higher">
                        <img width="545" src={IMAGE_FOLDER + "GeneratedDungeon.png"}></img>
                    </div>
                </Grid>
            </Grid>
        } />
    )
}

export default DungeonGenerator;