import React from 'react';
import usePageTitleName from '../../../Hook/PageTitleName/PageTitleName';

const MyCourses = () => {
    usePageTitleName('My courses page')
    return (
        <div>
            <h2 className='text-red-600'>Mycourses</h2>
        </div>
    );
};

export default MyCourses;