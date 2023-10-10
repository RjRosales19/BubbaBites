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
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
		<div className="main-sign-up-container">

			<h1>Sign Up</h1>

			<div className="sign-up-form-container">
				<div>
					<form onSubmit={handleSubmit}>
						<ul>
							{errors.map((error, idx) => <li key={idx}>{error}</li>)}
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
