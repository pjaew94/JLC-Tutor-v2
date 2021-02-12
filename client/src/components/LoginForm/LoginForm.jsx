import "./LoginForm.scss";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../redux/actions/auth';

const LoginForm = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data;
    dispatch(loginAction(email,password))
  };

  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <motion.input
        className="text-input"
        name="email"
        placeholder="Email"
        ref={register}
      ></motion.input>
      <motion.input
        className="text-input"
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      ></motion.input>
      <motion.input className="submit-button" type="submit" value="Login" />
      <h3>
        New student?{" "}
        <Link className="register-link" to="/register">
          Register here!
        </Link>
      </h3>
    </form>
  );
};

export default LoginForm;
