import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedPrice } from '../actions/selectedPrice_action';
import { Paper, Grid, Typography } from '@material-ui/core';
import PotentialSellPrice from '../components/potential_sell_price';
import SellOrders from '../components/sell_orders';
import BuyOrders from '../components/buy_orders';
import CurrentPrice from '../components/current_price';


class RightColumn extends Component
{
    constructor(props)
    {
        super(props);

        // empty prices array that we will be filling up either through Binance Api calls or from our static prices_reducers list
        // which we have mapped below.  Remember you do not import reducers, you map your class props to the reducers state.
        this.state = { buyPrices: [], sellPrices:[] }; 

        // This is a callback function that we pass as props to our child sell orders component
        // Reason we do this is so we can call our dispatch action creator from this parent container
        // Which we have to do to send whatever clicked price we click on to a sibling component (potential sell price) from the child component (sell orders)
        this.OrderBookCallBack = this.OrderBookCallBack.bind(this);  

    }



    OrderBookCallBack(price)
    {
        this.props.selectedPrice(price);
    }


    render()
    {
        return(
           <Grid container direction = 'column'   > 
               <SellOrders sellPrices = {this.props.sellPrices} orderBookCallBack = { this.OrderBookCallBack.bind(this) } />
               <CurrentPrice />
               <BuyOrders buyPrices = {this.props.buyPrices} orderBookCallBack = { this.OrderBookCallBack.bind(this) }/>
           </Grid>     
        );
    }

}



function mapStateToProps(state)
{
    return{
        sellPrices: state.sellPrices,
        buyPrices: state.buyPrices
    };
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators( { selectedPrice: selectedPrice}, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);