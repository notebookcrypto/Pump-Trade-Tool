import { combineReducers } from 'redux';
import Prices from './prices_reducer';
import SelectedPrice from './selected_price_reducer';

const rootReducer = combineReducers({

  selectedPrice: SelectedPrice,
  prices: Prices
});

export default rootReducer;
