import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


function Navigation () {
    const [navbar, setNavbar] = useState(false);

    const Navmenu = () => {
        setNavbar(!navbar);
    };

    return (
        <div className='w-full fixed top-0 right-0 left-0 z-10'>
            <nav className="bg-white text-black shadow-md ">
            <div className="mx-auto flex justify-between items-center py-4 px-10 max-md:px-5">
                <div className="text-2xl font-bold ">
                    <Link to='/'>Morelax</Link>
                </div>

                <div
                    className={`absolute lg:static top-16 left-0 w-[62%] max-lg:w-full z-10 bg-[#EFF3EA] lg:bg-transparent shadow-lg 
                        lg:shadow-none lg:flex items-center justify-evenly transition-all duration-300 ${navbar ? 'block' : 'hidden'}`}>

                    <ul className="flex flex-col lg:flex-row gap-7  text-lg lg:items-center p-5 lg:p-0">
                        <li className="">
                            <Link to='/' className='focus:text-red-600 duration-200' onClick={Navmenu}>Home</Link>
                        </li>
                        <li className="">
                            <Link to='/menpage' className='focus:text-red-600 duration-200' onClick={Navmenu}>Men</Link>
                        </li>
                        <li className="">
                            <Link to='/womenpage' className='focus:text-red-600 duration-200' onClick={Navmenu}>Women</Link>
                        </li>
                        <li className="">
                            <Link to='/unisexpage' className='focus:text-red-600 duration-200' onClick={Navmenu}>Unisex</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col  lg:flex-row gap-5 text-lg lg:items-center p-5 lg:p-0 lg:ml-auto">
                        <li>
                            <Link to='/cartpage' className=' focus:text-red-600 text-[16px] max-lg:text-lg duration-200' onClick={Navmenu}>
                                <i className="fa-solid fa-cart-shopping text-[16px] pr-1 " ></i>
                                Cart 
                                {/* {cart.length > 0 ? `${cart.length}`: "" } */}
                            </Link>
                        </li>
                    </ul>
                </div>

                <button
                    className="lg:hidden text-3xl focus:outline-none"
                    onClick={Navmenu}
                >
                    {Navmenu ? '✖' : '☰'}
                </button>
            </div>
        </nav>
        </div>
    );
};

export default Navigation;
