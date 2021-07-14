import React from 'react';
import WriteActionButtons from '../components/write/WriteActionButtons';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../components/write/EditorContainer';
import TagBoxContainer from '../components/write/TagBoxContainer';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButtons/>
        </Responsive>
    );
};

export default WritePage;