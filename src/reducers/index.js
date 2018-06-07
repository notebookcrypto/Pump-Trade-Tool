import { combineReducers } from 'redux';
import SellPrices from './sell_prices_reducer';
import BuyPrices from './buy_prices_reducer';
import SelectedPrice from './selected_price_reducer';

const rootReducer = combineReducers({

  selectedPrice: SelectedPrice,
  sellPrices: SellPrices,
  buyPrices: BuyPrices
});

export default rootReducer;
