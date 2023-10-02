import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import File, { IMAGE_FOLDER } from "../files/File";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import RatGame from "./RatGame"
import FarmGame from "./FarmGame"
import CardGame from "./CardGame"
import './projects.css';
import Window from "../files/Window";

function ProjectFiles() {
    return (
        <div>
            <Link to="/projects/ratGame">
                <File fileName="Ratventure in the pipes.exe" fileImage="RatPipeGame.png" hoverFileImage="RatPipeGameHover.png" />
            </Link>
            <Link to="/projects/farmGame">
                <File fileName="Farm game.exe" fileImage="FarmGame.png" hoverFileImage="FarmGameHover.png" />
            </Link>
            <Link to="/projects/cardGame">
                <File fileName="Card game.exe" fileImage="CardGame.png" hoverFileImage="CardGameHover.png" />
            </Link>
        </div>
    )
}

export function Project(props) {
    return (
        <Container maxWidth="md">
            <Window isTextWindow={true} height={12} width={8} content={
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Grid item 
                        container
                        justifyContent="space-between"
                        alignItems="flex-start"
                        direction="row"
                    >
                        <Grid item>
                            <img src={IMAGE_FOLDER + "github-mark.png"} className="gitmark" style={{opacity:"0"}}></img>
                        </Grid>
                        <Grid item>
                            <img src={IMAGE_FOLDER + props.titleImage}></img>
                        </Grid>
                        <Grid item sx={{zIndex:"5"}}>
                            <a href="https://github.com/ZuzannaDP/RatPipeGame">
                                <img src={IMAGE_FOLDER + "github-mark.png"} className="gitmark"></img>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid item>
                        {props.content}
                    </Grid>
                </Grid>
            }/>
        </Container>
    )
}

function Projects() {
    const { project } = useParams();
    let projectElement;

    if (project == "ratGame") {
        projectElement = <RatGame/>
    } else if (project == "farmGame") {
        projectElement = <FarmGame />
    } else if (project == "cardGame") {
        projectElement = <CardGame />
    }

    return (
        <Container id="about-me">
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Grid item>
                    <p>Projects</p>
                </Grid>

                <Grid item>
                    <ProjectFiles />
                </Grid>

                <Grid item
                    sx={{marginBottom:"75px"}}>
                    {projectElement}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;