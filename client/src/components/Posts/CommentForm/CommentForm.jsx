import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addComment } from './../../../redux/actions/posts';

import TextareaAutosize from 'react-textarea-autosize';

const CommentForm = ({postId, subject}) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        dispatch(addComment(postId, data, subject))
    }


    return (
        <form className='comment-form' onSubmit={handleSubmit(onSubmit)}>
            <TextareaAutosize autoFocus className='input-field' name='text' placeholder="Comment..." ref={register}  />
            <input className='input-submit' type='submit' />
        </form>
    )
}

export default CommentForm;
