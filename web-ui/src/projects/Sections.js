import { Grid } from '@mui/material'
import Markdown from 'react-markdown'

export function ReleaseNotes(params) {
    return (
        <div className="release-notes">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                    <Grid item container justifyContent="flex-start">
                        <p>{params.title}</p>
                    </Grid>

                    <Grid item>
                        <Markdown>{params.notes}</Markdown>
                    </Grid>
            </Grid>
        </div>
    )
}