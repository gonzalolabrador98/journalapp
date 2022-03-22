/* eslint-disable object-curly-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import 'animate.css';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { name, email, password1, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("Email isn't valid"));
      return false;
    }
    if (password1 !== password2 || password1.length < 5) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match each other'
        )
      );
      return false;
    }

    dispatch(removeError());

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password1, name));
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="auth__title mb-1">Register</h2>

      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Ready
        </button>

        <Link to="/auth/login" className="link ">
          Already Registered?
        </Link>
      </form>
    </div>
  );
};
