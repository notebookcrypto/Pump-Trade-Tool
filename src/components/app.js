import React, { Component } from 'react';
import OrderBook from '../containers/order_book';
import PotentialSellPrice from './potential_sell_price';
import Header from '../layout/header';
import { Grid, Paper, Typography } from '@material-ui/core';

export default class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <Grid container >
          <Grid item xs>
            <PotentialSellPrice />
          </Grid>

          <Grid item xs>
            Middle Item
          </Grid>

          <Grid item xs>
            <OrderBook />
          </Grid>
        </Grid>

      </div>
    );
  }
}
