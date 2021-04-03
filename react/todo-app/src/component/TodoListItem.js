import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames'
import './TodoListItem.scss';

const TodoListItem = ({todo, onREmove, onToggle}) => {
    const {id, text, checked} = todo;
    return(
        <div className="TodoListItem">
            <div className={cn("checkBox",{checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onREmove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);