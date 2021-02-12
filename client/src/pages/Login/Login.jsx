import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import Alert from "../../components/Alert/Alert";

import { useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Redirect to="/courses" />;
  }

  return (
    <div className="login">
      <Alert />
      <LoginForm />
    </div>
  );
};

export default Login;
