import { Link } from "react-router-dom";
import img from '../../assets/Error/ErrorPhoto.webp'
import usePageTitleName from "../../Hook/PageTitleName/PageTitleName";

const ErrorPage = () => {
    usePageTitleName('Got Error')

    return (
        <div className=" text-center relative">
                < img src={img} alt="" className='w-screen h-[700px] col-sm-12 col-lg-6 '  />
                <Link to='/' className="absolute bottom-[200px] left-5 lg:left-20 sm:left-5 md:left-5">
                    <button className='px-10 mb-5 rounded-lg text-xl fw-bold border-0 py-4 font-bold' style={{ color: 'white', backgroundColor: '#d10000' }} title="Go to the Home">Back to Home</button>
                </Link>
        </div>
    );
};

export default ErrorPage;