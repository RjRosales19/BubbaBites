import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }

  };

  const handleSignDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'))
    closeModal()

  }

  return (
    <>
    <div className="main-sign-in-container">
      <h1>Sign In</h1>
      <div className="sign-in-form-container">
        <div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            Email
            <div>
              <label>
                <input
                  className="sign-in-email-input"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  maxLength="50"
                />
              </label>
            </div>
            Password
            <div>
              <label>
                <input
                  className="sign-in-password-input"
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
            <button className='sign-in-form-modal-button'type="submit">Sign In</button>
          </form>
        </div>
        <button className="sign-in-demo-user" onClick={handleSignDemo}>Sign in as Demo User</button>
      </div>
    </div>
    </>
  );
}

export default LoginFormModal;
