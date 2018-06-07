import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';


export default (props) =>
{
    return (

        <Grid item xs >
            <Paper className = 'CurrentPrice' >
                Current Price
            </Paper>
        </Grid>
    );
}