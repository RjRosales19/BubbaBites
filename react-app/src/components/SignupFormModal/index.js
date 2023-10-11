import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();
	const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

	console.log(isValidEmail)
	const handleSubmit = async (e) => {
		e.preventDefault();

		const errorsObj = {}
		if(password != confirmPassword) errorsObj.password = "Confirm Password field must be the same as the Password field"
		if(!isValidEmail) errorsObj.email = "Email must be a valid email"
		if(username.length < 4) errorsObj.username = "Username must be atleast 4 characters"

		if(Object.keys(errorsObj).length === 0){
			const data = await dispatch(signUp(username, email, password));
			closeModal();
		}else{
			setErrors(errorsObj)
		}
	};
		// if (password === confirmPassword && isValidEmail) {
		// 	if (data) {
		// 		setErrors(data);
		// 	} else {
		// 	}
		// } else {
		// 	setErrors([
		// 		"Confirm Password field must be the same as the Password field", "Must be a valid email"
		// 	]);
		// }

	return (
		<>
		<div className="main-sign-up-container">

			<h1>Sign Up</h1>

			<div className="sign-up-form-container">
				<div>
					<form onSubmit={handleSubmit}>
						<ul>
							{Object.values(errors).map((error, idx) => <li key={idx}>{error}</li>)}
						</ul>

						Email
						<div>
							<label>
								<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder="Email"
								minLength='6'
								maxLength="50"
								/>
							</label>
						</div>

						Username
						<div>
							<label>
								<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								placeholder="Username"
								minLength='2'
								maxLength='30'
								/>
							</label>
						</div>

						Password
						<div>
							<label>
								<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder="Password"
								minLength="8"
								maxLength="50"
								/>
							</label>
						</div>

						Confirm Password
						<div>
							<label>
								<input
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								placeholder="Confirm Password"
								minLength="8"
								maxLength="50"
								/>
							</label>
						</div>

						<button className='sign-up-form-button' type="submit">Sign Up</button>

					</form>
				</div>
			</div>
    	</div>
		</>
	);
}

export default SignupFormModal;
