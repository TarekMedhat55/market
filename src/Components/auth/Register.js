import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DropZonePhoto } from "./DropZpn";
import { register } from "../../actions/auth";
const RegisterSchema = Yup.object().shape({
	first_name: Yup.string()
		.min(4, "Too Short!")
		.max(20, "Too Long!")
		.required("first Name Is Required"),
	last_name: Yup.string()
		.min(4, "Too Short!")
		.max(20, "Too Long!")
		.required("last Name Is Required"),
	password: Yup.string()
		.min(6, "Too Short!")
		.max(20, "Too Long!")
		.required("Password Is Required"),
	email: Yup.string().email("Invalid email").required("Email Is Required"),
});

const Register = ({ register, history, emailTaken }) => {
	return (
		<div className='registerWrapper'>
			<div className='container'>
				<Formik
					initialValues={{
						email: "",
						password: "",
						first_name: "",
						last_name: "",
						isSeller: false,
						Avatar: "",
					}}
					validationSchema={RegisterSchema}
					onSubmit={(values) => {
						let formData = new FormData();
						formData.append("email", values.email);
						formData.append("password", values.password);
						formData.append("first_name", values.first_name);
						formData.append("last_name", values.last_name);
						formData.append("isSeller", values.isSeller);
						formData.append("Avatar", values.Avatar);
						register(formData, history);
					}}
				>
					{({ errors, touched, setFieldValue }) => (
						<Form>
							<div className='form-group'>
								<DropZonePhoto setFieldValue={setFieldValue} />
							</div>
							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='first_name' className='bmd-label-floating'>
											First Name
										</label>
										<Field
											placeholder='Enter Your First Name'
											name='first_name'
											type='text'
											className={
												errors.first_name && touched.first_name
													? "form-control is-invalid"
													: "form-control "
											}
										/>
										{errors.first_name && touched.first_name ? (
											<div className='invalid-feedback d-block '>
												{errors.first_name}
											</div>
										) : null}
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='last_name' className='bmd-label-floating'>
											Last Name
										</label>
										<Field
											placeholder='Enter Your Last Name'
											name='last_name'
											type='text'
											className={
												errors.last_name && touched.last_name
													? "form-control is-invalid"
													: "form-control "
											}
										/>
										{errors.last_name && touched.last_name ? (
											<div className='invalid-feedback d-block '>
												{errors.last_name}
											</div>
										) : null}
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='email' className='bmd-label-floating'>
											Email address
										</label>
										<Field
											name='email'
											type='email'
											placeholder='Enter Your Email'
											className={
												errors.email && touched.email
													? "form-control is-invalid"
													: "form-control "
											}
										/>
										{errors.email && touched.email ? (
											<div className='invalid-feedback d-block '>
												{errors.email}
											</div>
										) : null}
									</div>
									<div className='invalid-feedback d-block '>{emailTaken}</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='password' className='bmd-label-floating'>
											Password
										</label>
										<Field
											placeholder='Enter Your Password'
											name='password'
											type='password'
											className={
												errors.password && touched.password
													? "form-control is-invalid"
													: "form-control "
											}
										/>
										{errors.password && touched.password ? (
											<div className='invalid-feedback d-block '>
												{errors.password}
											</div>
										) : null}
									</div>
								</div>
							</div>

							<div class='form-check'>
								<label class='form-check-label' for='isSeller'>
									<Field
										type='checkbox'
										class='form-check-input'
										name='isSeller'
									/>
									Register as Seller
								</label>
							</div>
							<button type='submit' className='registerButton'>
								Register
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		emailTaken: state.user.emailTaken,
	};
};
export default connect(mapStateToProps, { register })(withRouter(Register));
