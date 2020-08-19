import {
	GET_CATEGORIES_FAIL,
	GET_CATEGORIES_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
} from "../actions/Types";

const initialState = {
	categories: [],
	loading: true,
	products: [],
	product: {},
};
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: payload,
				loading: false,
			};
		case GET_CATEGORIES_FAIL:
			return {
				...state,
				categories: [],
				loading: false,
			};
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: payload,
				loading: false,
			};
		case GET_PRODUCTS_FAIL:
			return {
				...state,
				products: [],
				loading: true,
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...state,
				product: payload,
				loading: false,
			};
		case GET_PRODUCT_FAIL:
			return {
				...state,
				product: {},
				loading: true,
			};
		default:
			return state;
	}
}
