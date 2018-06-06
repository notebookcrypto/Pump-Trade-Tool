import React, { Component } from 'react';
import PotentialSellPrice from '../components/potential_sell_price';
import { Grid, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

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
            <Grid item md >
                <PotentialSellPrice clickedPrice = { this.props.clickedPrice } />
            </Grid>
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