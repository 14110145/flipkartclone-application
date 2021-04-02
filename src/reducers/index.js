import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import categoryReducer from "./category.reducers";
import productReducers from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducers,
  auth: authReducers,
});

export default rootReducer;
