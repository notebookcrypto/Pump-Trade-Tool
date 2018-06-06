import { combineReducers } from 'redux';
import Prices from './prices_reducer';

const rootReducer = combineReducers({
  prices: Prices
});

export default rootReducer;
