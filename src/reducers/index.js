import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import cartReducers from "./cart.reducers";
import categoryReducer from "./category.reducers";
import productReducers from "./product.reducers";
import userReducers from "./user.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducers,
  auth: authReducers,
  cart: cartReducers,
  user: userReducers
});

export default rootReducer;
