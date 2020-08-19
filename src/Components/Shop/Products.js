import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../../images/product-1.jpg";
const Products = ({ products }) => {
	return (
		<div className='row'>
			{products.map((product) => (
				<div className='col-sm-6 col-md-6 col-lg-4 ' key={product._id}>
					<div className='product'>
						<Link to={`products/${product.product_id}`} className='img-prod'>
							<img
								className='img-fluid'
								src={Product1}
								alt='Colorlib Template'
							/>
						</Link>
						<div className='text py-3 px-3'>
							<h3>
								<a href='#'>{product.name}</a>
							</h3>
							<div className='d-flex'>
								<div className='pricing'>
									<p className='price'>
										<span className='price-sale'>${product.price}</span>
									</p>
								</div>
								<div className='rating'>
									<p className='text-right'>
										<a href='#'>
											<span className='ion-ios-star-outline'>
												<svg
													style={{ marginLeft: "5px" }}
													width='1em'
													height='1em'
													viewBox='0 0 16 16'
													className='bi bi-star'
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fillRule='evenodd'
														d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
													/>
												</svg>
											</span>
										</a>
										<a href='#'>
											<span className='ion-ios-star-outline'>
												<svg
													style={{ marginLeft: "5px" }}
													width='1em'
													height='1em'
													viewBox='0 0 16 16'
													className='bi bi-star'
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fillRule='evenodd'
														d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
													/>
												</svg>
											</span>
										</a>
										<a href='#'>
											<span className='ion-ios-star-outline'>
												<svg
													style={{ marginLeft: "5px" }}
													width='1em'
													height='1em'
													viewBox='0 0 16 16'
													className='bi bi-star'
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fillRule='evenodd'
														d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
													/>
												</svg>
											</span>
										</a>
										<a href='#'>
											<span className='ion-ios-star-outline'>
												<svg
													style={{ marginLeft: "5px" }}
													width='1em'
													height='1em'
													viewBox='0 0 16 16'
													className='bi bi-star'
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fillRule='evenodd'
														d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
													/>
												</svg>
											</span>
										</a>
										<a href='#'>
											<span className='ion-ios-star-outline'>
												<svg
													style={{ marginLeft: "5px" }}
													width='1em'
													height='1em'
													viewBox='0 0 16 16'
													className='bi bi-star'
													fill='currentColor'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														fillRule='evenodd'
														d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
													/>
												</svg>
											</span>
										</a>
									</p>
								</div>
							</div>
							<p className='bottom-area d-flex px-3'>
								<Link
									to={`products/${product.product_id}`}
									className='add-to-cart text-center py-2 mr-1'
								>
									<span>
										Show Product
										<svg
											width='18px'
											height='18px'
											viewBox='0 0 16 16'
											className='bi bi-eye'
											fill='currentColor'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z'
											/>
											<path
												fillRule='evenodd'
												d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'
											/>
										</svg>
									</span>
								</Link>
								<a href='#' className='buy-now text-center py-2'>
									<span>
										Add to cart
										<svg
											width='18px'
											height='18px'
											viewBox='0 0 16 16'
											className='bi bi-bag-plus'
											fill='currentColor'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z'
											/>
											<path d='M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z' />
											<path
												fillRule='evenodd'
												d='M8 7.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
											/>
											<path
												fillRule='evenodd'
												d='M7.5 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-2z'
											/>
										</svg>
									</span>
								</a>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
