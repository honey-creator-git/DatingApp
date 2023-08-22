import React from 'react'

export default function AdminContent({ contentComponent }) {
    return (
        <div className='px-6 mt-10 w-full mx-auto'>
            { contentComponent }
        </div>
    );
}