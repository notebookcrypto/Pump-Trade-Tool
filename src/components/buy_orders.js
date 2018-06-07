import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';


export default ({buyPrices, orderBookCallBack}) =>
{

    return buyPrices.map( (price) => 
        {
            return (
                <Grid key = { price.key} item xs >
                    <Paper 
                        style = {{ paddingTop: 10, marginTop: 10, marginBottom: 10, margin: 'auto'}}
                    >
                        {/* *** IMPORTANT  Whenever we use onCLick we need to use ES6 syntax and use a fat arrow to pass the function we want to pass onClick
                                If not, then this function will get called at the start of the applications rendering regardless if anything is clicked or not! 
                                Here we are calling the ActionCreator selectedPrice which is also obviously a function
                                */}
                                
                        <ul onClick = { () => orderBookCallBack(price.price) } className = 'BuyOrderText' style = {{margin: 'auto', textAlign: 'center', }}>
                            { price.price } 
                        </ul>
                    
                    </Paper>
                </Grid>
            );
        }
    );
}