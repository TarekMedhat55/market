import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { login } from "../../actions/auth";
const LoginSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, "Too Short!")
		.max(20, "Too Long!")
		.required("Password Is Required"),
	email: Yup.string().email("Invalid email").required("Email Is Required"),
});

const Login = ({
	login,
	wrongPassword,
	WrongName,
	history,
	isAuthenticated,
}) => {
	if (isAuthenticated) {
		return <Redirect to='/shop' />;
	}
	return (
		<div className='loginWrapper'>
			<div className='container'>
				<h1 className='text-center font-weight-bold  '>Login</h1>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={LoginSchema}
					onSubmit={(values) => {
						login(values, history);
					}}
				>
					{({ errors, touched }) => (
						<Form>
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
								<div className='invalid-feedback d-block '>{WrongName}</div>
							</div>
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
								<div className='invalid-feedback d-block '>{wrongPassword}</div>
							</div>

							<button type='submit' className=' registerButton'>
								Login
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		wrongPassword: state.user.WrongPassword,
		WrongName: state.user.WrongName,
		isAuthenticated: state.user.isAuthenticated,
	};
};
export default connect(mapStateToProps, { login })(withRouter(Login));
