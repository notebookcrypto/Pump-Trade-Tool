import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';


export default ({clickedPrice}) =>
{

    const message = "Potential Sell Price: "
    const price = clickedPrice;

    return(
        <Paper>
            
            {message}  {price}
            
        </Paper>
    )
    
}