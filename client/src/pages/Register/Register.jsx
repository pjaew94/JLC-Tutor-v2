import './Register.scss'
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Alert from '../../components/Alert/Alert';

import { useSelector } from "react-redux";


import { Redirect } from "react-router-dom";

const Register = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);


    if (isAuthenticated) {
      return <Redirect to="/courses" />;
    }

    return (
        <div className='register'>
            <Alert />
            <RegisterForm />
        </div>
    )
}

export default Register