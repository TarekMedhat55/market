import React, { useEffect } from "react";
import { connect } from "react-redux";
import Categories from "./Categories";
import Products from "./Products";
import Spinner from "../Layouts/Spinner";
import { GetCategories, GetProducts } from "../../actions/products";

const Shop = ({
	GetCategories,
	GetProducts,
	products,
	categories,
	loading,
}) => {
	useEffect(() => {
		GetCategories();
		GetProducts();
	}, [GetCategories, GetProducts]);
	return loading ? (
		<Spinner />
	) : (
		<section className='ftco-section bg-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-lg-10 order-md-last'>
						<Products products={products} />
					</div>
					<div className='col-md-4 col-lg-2 sidebar'>
						<Categories categories={categories} />
					</div>
				</div>
			</div>
		</section>
	);
};
const mapStateToProps = (state) => {
	return {
		categories: state.products.categories,
		loading: state.products.loading,
		products: state.products.products,
	};
};
export default connect(mapStateToProps, { GetCategories, GetProducts })(Shop);
