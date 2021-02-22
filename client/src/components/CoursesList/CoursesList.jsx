import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './CoursesList.scss';

import { useSelector, useDispatch } from "react-redux";
import { getAllSubjects } from "../../redux/actions/subjects";
import { removeSubjectPosts } from "../../redux/actions/posts";
import { getSubjectPosts } from './../../redux/actions/posts';


import { useMediaQuery } from 'react-responsive';


const CoursesList = () => {

    const [currentSubject, setCurrentSubject] = useState('');

    const { auth, subjects } = useSelector((state) => state);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllSubjects());
    
        return function cleanup() {
          dispatch(removeSubjectPosts());
        };
      }, [dispatch]);


      //Lists subjects related to the student/instructors classes
  let coursesSubjects = [];
  if (subjects.subjects && !subjects.loading && auth.user) {
    coursesSubjects = subjects.subjects.filter(function (e) {
      if (auth.user.status === "Admin" || auth.user.status === "Instructor") {
        return e.instructorSubjects === auth.user.instructorSubjects;
      } else {
        return e.studentSubjects === auth.user.studentSubjects;
      }
    });
  }

//   Calls posts for clicked subject
const callPostAndDirect = (subjectId) => {
    dispatch(getSubjectPosts(subjectId));
    setCurrentSubject(subjectId);
    history.push(`/courses/${subjectId}`)
}

    return (
        <div className='courses-list'>
            {coursesSubjects && coursesSubjects.map((course, index) => {
                return <div className={`course ${course.subjectId === currentSubject ? 'current-course' : undefined}`} key={course._id} onClick={() => callPostAndDirect(course.subjectId)}>
                    <div className={`color-tab color-tab-${index}`}></div>
                    <div className="content">
                        <div className="subject">
                            {course.subject}
                        </div>
                        <div className="left">
                            <h3 className="instructor">
                                <span>Instructor:</span> {course.instructorFirst} {course.instructorLast}
                            </h3>
                            <h3 className="time">
                                <span>Time:</span> {course.startTime} - {course.endTime}
                            </h3>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CoursesList