import React, { Component } from 'react';
import PotentialSellPrice from './potential_sell_price';
import Header from '../layout/header';
import { Grid, Paper, Typography } from '@material-ui/core';
import LeftColumn from '../layout/left_column';
import MiddleColumn from '../layout/middle_column';
import RightColumn from '../layout/right_column';


export default class App extends Component {


  render() {
    return (
      <div>

        <Header />

        <Grid container >
          <Grid item xs>
            <LeftColumn />
          </Grid>

          <Grid item xs>
            <MiddleColumn />
          </Grid>

          <Grid item xs>
            <RightColumn />
          </Grid>
        </Grid>

      </div>
    );
  }
}
