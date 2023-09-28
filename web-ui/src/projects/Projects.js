import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import File from "../files/File";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import RatGame from "./RatGame"
import FarmGame from "./FarmGame"
import CardGame from "./CardGame"
import './projects.css';

function ProjectFiles() {
    return (
        <div>
            <Link to="/projects/ratGame">
                <File fileName="Ratventure in the pipes.exe" fileImage="RatPipeGame.png" hoverFileImage="RatPipeGame.png" />
            </Link>
            <Link to="/projects/farmGame">
                <File fileName="Farm game.exe" fileImage="FarmGame.png" hoverFileImage="FarmGame.png" />
            </Link>
            <Link to="/projects/cardGame">
                <File fileName="Card game.exe" fileImage="CardGame.png" hoverFileImage="CardGame.png" />
            </Link>
        </div>
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

                <Grid item>
                    {projectElement}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;