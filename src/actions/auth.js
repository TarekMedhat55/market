import api from "../utils/api";
import {
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	USER_LOADED,
} from "./Types";

// Load User
export const loadUser = () => async (dispatch) => {
	try {
		const res = await api.get("/user/current");
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};
// Register User
export const register = (formData, history) => async (dispatch) => {
	try {
		const res = await api.post("/user/register", formData);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		history.push("/login");
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			emailTaken: err.response.data.email,
		});
	}
};
// Login User
export const login = (values, history) => async (dispatch) => {
	try {
		const res = await api.post("/user/login", values);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());

		history.push("/shop");
	} catch (err) {
		console.log(err.response.data.password);
		dispatch({
			type: LOGIN_FAIL,
			passwordWrong: err.response.data.password,
			userNameWrong: err.response.data.username,
		});
	}
};
