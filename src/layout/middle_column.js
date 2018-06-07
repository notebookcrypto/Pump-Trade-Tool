import React, { Component, Fragment } from 'react';
import PotentialSellPrice from '../components/potential_sell_price';
import { Grid, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import CoinSelection from '../components/coin_selection';

class MiddleColumn extends Component
{

    constructor(props)
    {
        super(props);

        this.state = { clickedPrice: '' };
    }

    renderChildComponents()
    {
        return(
            // Using fragment here because when we return more than 1 jsx element we need to have a parent wrapper element and I dont want to use another div or
            // whatever for no reason.  Remember fragment is an element that is like a div but doesnt get rendered to the dom.
            <Fragment >
                <Grid item md >
                    <CoinSelection />
                </Grid>

                <Grid item md >
                    <PotentialSellPrice clickedPrice = { this.props.clickedPrice } />
                </Grid>
            </Fragment>
        );
    }

    render()
    {
        return (
            <Grid container direction = 'column' >
                {this.renderChildComponents()}
            </Grid>
        );
    }
    
}


function mapStateToProps(state)
{
    return{
        clickedPrice: state.selectedPrice
    };
}


export default connect(mapStateToProps)(MiddleColumn);