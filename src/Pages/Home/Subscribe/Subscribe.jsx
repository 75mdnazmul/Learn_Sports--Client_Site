import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import Container from '../../Shared/Container/Container';

const Subscribe = () => {
    return (
        <Container>
            <div className='lg:flex justify-around lg:py-12 md:py-8 py-5 bg-[#0472DB] text-center'>
                <h2 className='text-4xl mb-2 lg:mb-0 md:mb-0 font-bold text-white'>SUBSCRIBE OUR <br /> LEARN SPORTS</h2>
                <div className='sm:pt-5'>
                    <input className='bg-white rounded-l-lg text-xl sm:mb-5 px-5 py-5 lg:w-[500px] md:w-[500px] sm:w-[300px] w-[300px]' type="text" placeholder='Enter your Email' title='Please fill out this field.' />
                    <button className='py-5 lg:px-7 md:px-5 sm:px-4 px-3  rounded-r-lg bg-[#F7B919] text-white font-bold text-xl'><FaRegPaperPlane className='inline me-2 text-xl' /> SUBSCRIBE</button>
                </div>
            </div>
        </Container>
    );
};

export default Subscribe;