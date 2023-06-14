import React from 'react';
import usePageTitleName from '../../../Hook/PageTitleName/PageTitleName';

const MyCourses = () => {
    usePageTitleName('My Courses page')
    return (
        <div>
            <h2 className='text-red-600'>MyCourses</h2>
        </div>
    );
};

export default MyCourses;