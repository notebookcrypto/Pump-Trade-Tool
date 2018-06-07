import React, { Component, Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import BTC_Amount from '../components/btc_amount';
import BTC_Movement from '../components/btc_movement';


class LeftColumn extends Component
{

    constructor(props)
    {
        super(props);


    }


    renderChildComponents()
    {
        return (

            <Fragment>
                <Grid item md >
                    <BTC_Amount />
                </Grid>

                <Grid item md >
                    <BTC_Movement />
                </Grid>
            </Fragment>


        );
    }

    render()
    {
        return(
            <Grid container direction = 'column' >  
                {this.renderChildComponents()}
            </Grid>
        );
    }



}




export default LeftColumn;