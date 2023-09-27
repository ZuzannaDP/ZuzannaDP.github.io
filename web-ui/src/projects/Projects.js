import { Container } from "@mui/material";
import { Grid } from "@mui/material";

function Projects() {
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
            </Grid>
        </Container>
    )
}

export default Projects;