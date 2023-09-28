import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Window from "../files/Window";
import { IMAGE_FOLDER } from "../files/File";

function AboutMeText() {
    return (
        <div className="about-me-text">
            <p className="text-highlight">Hi, I’m Zuzanna Poniatowska,</p>
            <p className="text-header">a Computer Science Student!</p>
            <p>I’m in my final year at the university of St Andrews and looking to enter the industry in a software developer role. I enjoy both front and back end work; but especially have a passion in game design! In my spare time I like to work on personal game projects which can be viewed below. The combination of creative and problem solving work involved in developing a game is what excites me and makes me want to enter this field!</p>
        </div>
    )
}

function AboutMeWindows() {
    return (
        <div className="about-me-windows">
            <div className="overlap2">
                <Window height={3} width={5} content={
                    <img style={{width:"450px"}} src={IMAGE_FOLDER + "TestAboutMe.jpg"}></img>
                }/>
            </div>
            <div className="overlap">
                <Window isTextWindow={true} height={3} width={5} content={
                    <AboutMeText />
                }/>
            </div>
        </div>
    )
}

function AboutMe() {
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
                    <p>About Me</p>
                </Grid>

                <Grid item>
                    <AboutMeWindows />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMe;