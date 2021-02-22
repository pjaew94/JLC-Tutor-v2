import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/actions/posts';
import TextareaAutosize from 'react-textarea-autosize';

const PostForm = ({ subject, userStatus }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.subject = subject

        dispatch(addPost(data))
    }

    return (
        <form className='post-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="upper-container">
                <TextareaAutosize className='post-homework-input-field' name='homework' placeholder='New homework' ref={register} />
                <input className='post-due-input-field' name='due' placeholder="Due Date YYYY-MM-DD"ref={register} />
            </div>
            <input className='post-input-submit' type='submit' />
        </form>
    )
}

export default PostForm