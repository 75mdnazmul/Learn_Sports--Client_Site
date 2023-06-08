import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.webp'
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='  bg-base-200 text-base-content'>
            <div className="footer container mx-auto p-10 ">
                <div>
                    <Link to='/' className='flex items-center '>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h3 className='font-bold text-2xl text-white'>Learn Sports</h3>
                    </Link>
                    <p className='py-4'>Our sports institute is the best institute.<br/> You or your child can safely get admission in our institution.<br/> We assure you that something good will happen inshallah</p>
                    <div className='flex gap-x-4'>
                        <i className='hover:text-[#F7B501] text-4xl'><FaFacebook /></i>
                        <i className='hover:text-[#F7B501] text-4xl'><FaTwitterSquare /></i>
                        <i className='hover:text-[#F7B501] text-4xl'><FaInstagram /></i>
                        <i className='hover:text-[#F7B501] text-4xl'><FaYoutube /></i>
                        <i className='hover:text-[#F7B501] text-4xl'><FaLinkedin /></i>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Classes</span>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Football</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Cricket </a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Badminton </a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Tennis</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Swimming</a>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Useful Links</span>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Privacy Policy</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Terms and Condition</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Disclaimer</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">Support</a>
                    <a className="link link-hover hover:text-[#F7B501] text-lg">FAQ</a>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Address</span>
                    <div className='flex'>
                        <span className='pe-3 text-[#F7B501]'><FaMapMarkerAlt /></span>
                        <a className="link link-hover hover:text-[#F7B501] text-lg">Jl. Raya Kuta No. 142, Kuta - Badung</a>
                    </div>
                    <div className='flex'>
                        <span className='pe-3 text-[#F7B501]'><FaPhoneAlt /></span>
                        <a className="link link-hover hover:text-[#F7B501] text-lg">(+88) 01 2345 6789</a>
                    </div>
                    <div className='flex'>
                        <span className='pe-3 text-[#F7B501]'><FaEnvelope /></span>
                        <a className="link link-hover hover:text-[#F7B501] text-lg">learn@sports.com</a>
                    </div>
                    <div className='flex'>
                        <span className='pe-3 text-[#F7B501]'><FaClock /></span>
                        <a className="link link-hover hover:text-[#F7B501]">06.00 AM - 06.00 PM</a>
                    </div>
                </div>
            </div>
            <div className='text-center py-5 bg-slate-800 text-lg text-slate-300'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;