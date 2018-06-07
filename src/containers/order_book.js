import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedPrice } from '../actions/selectedPrice_action';
import { Paper, Grid, Typography } from '@material-ui/core';
import PotentialSellPrice from '../components/potential_sell_price';


class OrderBook extends Component
{
    constructor(props)
    {
        super(props);

        // empty prices array that we will be filling up either through Binance Api calls or from our static prices_reducers list
        // which we have mapped below.  Remember you do not import reducers, you map your class props to the reducers state.
        this.state = { prices: []}; 
    }



    renderList()
    {
        return this.props.prices.map( (price) => {
            return (
                
                <Grid key = { price.key} item xs >
                    <Paper 
                        style = {{ paddingTop: 10, marginTop: 10, marginBottom: 10, margin: 'auto'}}
                    >
                        {/* *** IMPORTANT  Whenever we use onCLick we need to use ES6 syntax and use a fat arrow to pass the function we want to pass onClick
                                If not, then this function will get called at the start of the applications rendering regardless if anything is clicked or not! 
                                Here we are calling the ActionCreator selectedPrice which is also obviously a function
                                */}
                        <ul onClick = { () => this.props.selectedPrice(price.price) } className = 'OrderBookText' style = {{margin: 'auto', textAlign: 'center', }}>
                            { price.price } 
                        </ul>
                    
                    </Paper>
                </Grid>

            );
        });
    }


    render()
    {
        return(
           <Grid container direction = 'column'   > 
               {this.renderList()}
           </Grid>     
        );
    }

}



function mapStateToProps(state)
{
    return{
        prices: state.prices
    };
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators( { selectedPrice: selectedPrice}, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);