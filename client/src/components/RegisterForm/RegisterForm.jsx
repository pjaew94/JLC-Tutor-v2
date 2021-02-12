import "./RegisterForm.scss";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import { register as registerAction } from '../../redux/actions/auth';
import { setAlert } from '../../redux/actions/alert';
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { name, email, password, password2, studentSubjects } = data;
    const status = "Student";

    console.log(name)
    if (password !== password2 || password === '') {
        dispatch(setAlert('Please make sure your passwords are matching.', 'danger'))
    } else if (studentSubjects === "") {
        dispatch(setAlert('Please select your courses.', 'danger'))
    } else {
      dispatch(registerAction(name, email, password, status, studentSubjects));
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <motion.input
        className="text-input"
        name="name"
        placeholder="Full Name"
        ref={register}
      ></motion.input>
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
      <motion.input
        className="text-input"
        name="password2"
        type="password"
        placeholder="Confirm Password"
        ref={register}
      ></motion.input>
      <select name="studentSubjects" defaultValue="" ref={register}>
        <option disabled={true} value="">
          Select your subjects
        </option>
        <option className="option" value="sat">
          SAT Classes
        </option>
        <option className="option" value="pbC">
          PreAlg & Book Club
        </option>
        <option className="option" value="abC">
          Algebra & Book Club
        </option>
      </select>
      <motion.input className="submit-button" type="submit" value="Register" />
      <h3>
        Already registered?{" "}
        <Link className="register-link" to="/">
          Login here!
        </Link>
      </h3>
    </form>
  );
};

export default RegisterForm;
