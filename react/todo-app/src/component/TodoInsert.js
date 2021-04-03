import React, {useState, useCallback} from 'react';
/* https://react-icons.netlify.com/#/icons/md */
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])
    return(
        <form className="TodoInsert">
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