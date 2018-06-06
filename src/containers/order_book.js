import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Grid, Typography } from '@material-ui/core';


class OrderBook extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { prices: [] };

    }


    renderList()
    {
        return this.props.prices.map( (price) => {
            return (
                
                <Grid key = { price.key} item xs >
                    <Paper 
                        style = {{ paddingTop: 10, marginTop: 10, marginBottom: 10, margin: 'auto'}}
                    >
                        <ul className = 'OrderBookText' style = {{margin: 'auto', textAlign: 'center', }}>
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




export default connect(mapStateToProps)(OrderBook);