import React from 'react';
import './TodoTemplate.scss';

const Todotemplate = ({children}) => {
    return(
        <div className="Todotemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
}

export default Todotemplate