import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import cartReducers from "./cart.reducers";
import categoryReducer from "./category.reducers";
import productReducers from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducers,
  auth: authReducers,
  cart: cartReducers,
});

export default rootReducer;
