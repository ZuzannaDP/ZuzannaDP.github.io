import { Grid } from "@mui/material";
import { IMAGE_FOLDER } from "../files/File";
import Folder from "../files/Folder";
import { Link } from 'react-router-dom';

function Title() {
    var now = new Date();
    var datetime = now.toLocaleTimeString()

    return (
        <div id="title">
            <img src={IMAGE_FOLDER + "House.png"}></img>
            <div>
                <p>Zuzanna's Home</p>
                <p>{datetime}</p>
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <Grid 
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
        >
            <Grid item>
                <Link to="/">
                    <Folder fileName={"About me"} disabled={false} />
                </Link>
            </Grid>
            
            <Grid item>
                <Folder fileName={"Skills"} disabled={true} />
            </Grid>

            <Grid item>
                <Link to="/projects/">
                    <Folder fileName={"Projects"} disabled={false} />
                </Link>
            </Grid>
        </Grid>
    );
}

function Header() {
    return (
        <div id="header">
            <Grid 
                container
                direction="row"
                alignItems="stretch"
                justifyContent="space-between"
            >
                <Grid item>
                    <Title />
                </Grid>

                <Grid item>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;