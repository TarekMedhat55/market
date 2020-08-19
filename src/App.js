import React from "react";
import Navbar from "./Components/Navbar/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import { useEffect } from "react";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Shop from "./Components/Shop/Index";
import SingleProduct from "./Components/Shop/SingleProduct";
const App = () => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<div className='goto-here'>
					<Navbar />
					<Switch>
						<Route path='/register' component={Register} />
						<Route path='/login' component={Login} />
						<Route path='/shop' component={Shop} />
						<Route path='/products/:product_id' component={SingleProduct} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
