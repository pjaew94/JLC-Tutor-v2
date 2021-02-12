import './Courses.scss'

import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';

const Courses = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
      return <Redirect to='/' />;
    }


    return (
        <div className='courses'>
            <div className='inner'>
            <Navbar />
                
            </div>
        </div>
    )
}

export default Courses