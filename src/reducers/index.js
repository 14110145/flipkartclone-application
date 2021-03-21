import { combineReducers } from "redux";
import categoryReducer from "./category.reducers";
import productReducers from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducers,
});

export default rootReducer;
