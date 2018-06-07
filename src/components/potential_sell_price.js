import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

// CHILD COMPONENT OF MIDDLE_COLUMN CONTAINER

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