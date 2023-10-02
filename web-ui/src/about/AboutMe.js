import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Window from "../files/Window";
import { IMAGE_FOLDER } from "../files/File";

function AboutMeText() {
    return (
        <div className="about-me-text">
            <p className="text-highlight">Hi, I’m Zuzanna Poniatowska,</p>
            <p className="text-header">a Computer Science Student!</p>
            <p>I’m in my final year at the university of St Andrews and looking to enter the industry in a software developer role. I enjoy both front and back end work; but especially have a passion in game design! In my spare time I like to work on personal game projects which can be viewed in the projects section. The combination of creative and problem solving work involved in developing a game is what excites me and makes me want to enter this field!</p>
        </div>
    )
}

function LeftWindow() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
            sx={{width:"100%"}}
        >
            <Grid item>
                <div className="overlap">
                    <Window isTextWindow={true} height={3} width={5} content={
                        <AboutMeText />
                    }/>
                </div>
            </Grid>
        </Grid>
    )
}

function RightWindow() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={3}
            sx={{width:"100%"}}
        >

            <Grid item>
                <Window height={3} width={5} content={
                    <img style={{width:"450px"}} src={IMAGE_FOLDER + "TestAboutMe.jpg"}></img>
                }/>
            </Grid>
        </Grid>
    )
}

function AboutMeWindows() {
    return (
        <div className="about-me-windows">
                <LeftWindow />
            <div style={{bottom:"100px", position:"relative"}}>
                <RightWindow />
            </div>
        </div>
    )
}

function AboutMe() {
    return (
        <Container maxWidth="lg" id="about-me">
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
            >
                <Grid item container justifyContent="center">
                    <div >
                        <p>About Me</p>
                    </div>
                </Grid>

                <Grid item>
                    <Grid 
                        container
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                    >
                        <AboutMeWindows />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMe;