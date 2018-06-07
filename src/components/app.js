import React, { Component } from 'react';
import OrderBook from '../containers/order_book';
import PotentialSellPrice from './potential_sell_price';
import Header from '../layout/header';
import { Grid, Paper, Typography } from '@material-ui/core';
import MiddleColumn from '../layout/middle_column';

export default class App extends Component {


  render() {
    return (
      <div>

        <Header />

        <Grid container >
          <Grid item xs>
            Left Item
          </Grid>

          <Grid item xs>
            <MiddleColumn />
          </Grid>

          <Grid item xs>
            <OrderBook />
          </Grid>
        </Grid>

      </div>
    );
  }
}
