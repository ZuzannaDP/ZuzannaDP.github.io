import { Container, Grid } from "@mui/material";
import Window from "../files/Window";

function FarmGame() {
    return (
        <Container maxWidth="md">
            <Window isTextWindow={true} height={8} width={8} content={
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                    <Grid item>
                        <p>name</p>
                    </Grid>

                    <Grid item>
                        <p>desc</p>
                    </Grid>
                </Grid>
            }/>
        </Container>
    )
}

export default FarmGame;