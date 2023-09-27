import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import File from "../files/File";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

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

    return (
        <Container id="about-me">
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item>
                    <p>Projects</p>
                </Grid>

                <Grid item>
                    <ProjectFiles />
                </Grid>

                <Grid item>
                    <Routes>

                    </Routes>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;