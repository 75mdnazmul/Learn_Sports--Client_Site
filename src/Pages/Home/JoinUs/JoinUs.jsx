import React from 'react';
import img from '../../../assets/Background/badmanton.webp'

const JoinUs = () => {
    return (
        <div className='px-24 py-20' style={{
            backgroundImage: `url('${img}')`, width: '100%', backgroundAttachment: 'fixed', backgroundPosition: ' center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <h2 className='text-4xl font-bold'><spen className='text-[#F7B919]'>JOIN US NOW</spen> & GET FREE TRAINING!</h2>
            <p className='font-bold text-white py-5'>Honesty and transparency are the pillars of our organization. <br />We take our responsibilities seriously and work diligently to fulfill them.</p>
            <button className='py-5 px-7 rounded-lg bg-[#F7B919] text-white font-bold text-xl'>JOIN NOW</button>
        </div>
    );
};

export default JoinUs;