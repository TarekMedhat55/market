import api from "../utils/api";
import {
	GET_CATEGORIES_FAIL,
	GET_CATEGORIES_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
} from "./Types";

// GetCategories
export const GetCategories = () => async (dispatch) => {
	try {
		const res = await api.get("/category/all");

		dispatch({
			type: GET_CATEGORIES_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_CATEGORIES_FAIL,
		});
	}
};

export const GetProducts = () => async (dispatch) => {
	try {
		const res = await api.get("/product/all");

		dispatch({
			type: GET_PRODUCTS_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_PRODUCTS_FAIL,
		});
	}
};

export const GetProduct = (product_id) => async (dispatch) => {
	try {
		const res = await api.get(`/product/${product_id}`);

		dispatch({
			type: GET_PRODUCT_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_PRODUCT_FAIL,
		});
	}
};
