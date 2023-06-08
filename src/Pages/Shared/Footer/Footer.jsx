import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.webp'

const Footer = () => {
    return (
        <div>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link to='/' className='flex items-center'>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h3 className='font-bold text-2xl text-white'>Learn Sports</h3>
                    </Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Classes</span>
                    <a className="link link-hover text-lg">Football</a>
                    <a className="link link-hover">Cricket </a>
                    <a className="link link-hover">Badminton </a>
                    <a className="link link-hover">Tennis</a>
                    <a className="link link-hover">Swimming</a>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Useful Links</span>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms and Condition</a>
                    <a className="link link-hover">Disclaimer</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">FAQ</a>
                </div>
                <div>
                    <span className="font-bold text-2xl text-slate-200">Address</span>
                    <a className="link link-hover">icon Jl. Raya Kuta No. 142, Kuta - Badung</a>
                    <a className="link link-hover">(+88) 01 2345 6789</a>
                    <a className="link link-hover">learn@sports.com</a>
                    <a className="link link-hover">06.00 AM - 06.00 PM</a>
                </div>
            </div>
            <div className='text-center py-5 bg-slate-800 text-lg text-slate-300'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;