import { Link } from "react-router-dom";
import img from '../../assets/Error/ErrorPhoto.webp'
import usePageTitleName from "../../Hook/PageTitleName/PageTitleName";

const ErrorPage = () => {
    usePageTitleName('Got Error')

    return (
        <div className=" text-center">
            <div>
                < img src={img} alt="" className='w-screen col-sm-12 col-lg-6 ' />
            </div>
            <div>
                <Link to='/'>
                    <button className='px-5 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="Go to the Home">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;