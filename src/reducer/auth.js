import {
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	USER_LOADED,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "../actions/Types";

const initialState = {
	isAuthenticated: null,
	loading: true,
	user: null,
	WrongPassword: "",
	WrongName: "",
	emailTaken: "",
};
export default function (state = initialState, action) {
	const { type, payload, passwordWrong, userNameWrong, emailTaken } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				...payload,
				loading: false,
			};
		case REGISTER_FAIL:
			return {
				...state,
				emailTaken: emailTaken,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				...payload,
				loading: false,
				isAuthenticated: true,
			};
		case LOGIN_FAIL:
			return {
				...state,
				WrongPassword: passwordWrong,
				WrongName: userNameWrong,
			};
		case AUTH_ERROR:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		default:
			return state;
	}
}
