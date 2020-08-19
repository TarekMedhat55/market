import { combineReducers } from "redux";
import user from "./auth";
import products from "./Product";
const rotReducers = combineReducers({ user, products });

export default rotReducers;
