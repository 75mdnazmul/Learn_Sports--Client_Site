import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <div className='flex justify-around py-12 bg-[#0472DB]'>
            <h2 className='text-4xl font-bold text-white'>SUBSCRIBE OUR <br/> LEARN SPORTS</h2>
            <div>
                <input className='bg-white rounded-l-lg text-xl px-5 py-5 w-[500px]' type="text" placeholder='Enter your Email' title='Please fill out this field.' />
                <button className='py-5 px-7 rounded-r-lg bg-[#F7B919] text-white font-bold text-xl'><FaRegPaperPlane className='inline me-2 text-xl'/> SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;