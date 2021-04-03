import React, {useState, useCallback} from 'react';
/* https://react-icons.netlify.com/#/icons/md */
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value 초기화

            e.preventDefault();
        },
        [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder = "할일을 입력하세요."
                   value = {value}
                   onChange = {onChange}
            ></input>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;