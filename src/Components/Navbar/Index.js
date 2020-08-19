import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ isAuthenticated }) => {
	return (
		<Fragment>
			<div className='py-1 bg-black'>
				<div className='container'>
					<div className='row no-gutters d-flex align-items-start align-items-center px-md-0'>
						<div className='col-lg-12 d-block'>
							<div className='row d-flex'>
								<div className='col-md pr-4 d-flex topper align-items-center'>
									<div className='icon mr-2 d-flex justify-content-center align-items-center'>
										<span className='icon-phone2'></span>
									</div>
									<span className='text'>+ 1235 2355 98</span>
								</div>
								<div className='col-md pr-4 d-flex topper align-items-center'>
									<div className='icon mr-2 d-flex justify-content-center align-items-center'>
										<span className='icon-paper-plane'></span>
									</div>
									<span className='text'>youremail@email.com</span>
								</div>
								<div className='col-md-5 pr-4 d-flex topper align-items-center text-lg-right'>
									<span className='text'>
										3-5 Business days delivery &amp; Free Returns
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav
				className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
				id='ftco-navbar'
			>
				<div className='container'>
					<Link className='navbar-brand' to='/shop'>
						Winkel
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#ftco-nav'
						aria-controls='ftco-nav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='oi oi-menu'></span> Menu
					</button>

					<div className='collapse navbar-collapse' id='ftco-nav'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<NavLink
									to='/'
									activeClassName='active'
									exact
									className='nav-link'
								>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									to='/shop'
									className='nav-link'
									activeClassName='active'
								>
									Shop
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									to='/contact'
									className='nav-link'
									activeClassName='active'
								>
									Contact
								</NavLink>
							</li>
							<li className='nav-item cta cta-colored'>
								<NavLink
									to='/cart'
									className='nav-link'
									activeClassName='active'
								>
									<span className='icon-shopping_cart'>Cart</span>[0]
								</NavLink>
							</li>
							{isAuthenticated ? (
								<li className='nav-item'>
									<span style={{ cursor: "pointer" }} className='nav-link'>
										Log out
									</span>
								</li>
							) : (
								<Fragment>
									<li className='nav-item'>
										<NavLink
											to='/login'
											className='nav-link'
											activeClassName='active'
										>
											Login
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink
											to='/register'
											className='nav-link'
											activeClassName='active'
										>
											Get Started
										</NavLink>
									</li>
								</Fragment>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
	};
};
export default connect(mapStateToProps)(Navbar);
