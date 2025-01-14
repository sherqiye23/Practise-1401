import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router"
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useRef } from 'react';
import { basketContext } from '../../context/BasketContext';
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
    let { basket } = useContext(basketContext)
    const ref = useRef()

    const handleBars = () => {
        ref.current.classList.toggle("hidden")
    }

    return (
        <>
            <Container>
                <div className='flex items-start lg:items-center justify-between py-4 gap-3 '>
                    <div>
                        <span className='text-3xl font-bold'>COLO</span>
                        <span className='text-3xl font-bold text-[#FE4C50]'>SHOP</span>
                    </div>
                    <div className='hidden md:flex items-center justify-center text-lg'>
                        <nav className='mr-5 flex items-center justify-center gap-2'>
                            <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>HOME</span>
                            </NavLink>
                            <NavLink to={"/add"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>ADD</span>
                            </NavLink>
                            <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>PROMOTION</span>
                            </NavLink>
                            <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>PAGES</span>
                            </NavLink>
                            <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>BLOG</span>
                            </NavLink>
                            <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                <span>CONTACT</span>
                            </NavLink>
                        </nav>
                        <div className='flex items-center justify-center gap-2'>
                            <span className='ease-in transition-all duration-150 hover:opacity-50'><IoSearch /></span>
                            <span className='ease-in transition-all duration-150 hover:opacity-50'><FaUser /></span>
                            <div className='ease-in transition-all duration-150 hover:opacity-50 h-[50px] w-[50px] bg-gray-300 relative flex items-center justify-center rounded-[50%]'>
                                <div className='h-[20px] w-[20px] bg-[#FE4C50] flex items-center justify-center text-white absolute -top-[5px] right-0 rounded-[50%]'>{basket.length}</div>
                                <NavLink to={"/basket"} className="ease-in transition-all duration-150 text-black no-underline font-semibold hover:opacity-50">
                                    <span><FaCartShopping /></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:hidden  justify-center flex-col gap-2'>
                        <span className='text-3xl self-end' onClick={() => handleBars()}><FaBars /></span>
                        <div className='hidden' ref={ref}>
                            <nav className='flex flex-col  justify-center gap-2'>
                                <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>HOME</span>
                                </NavLink>
                                <NavLink to={"/add"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>ADD</span>
                                </NavLink>
                                <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>PROMOTION</span>
                                </NavLink>
                                <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>PAGES</span>
                                </NavLink>
                                <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>BLOG</span>
                                </NavLink>
                                <NavLink to={"/"} className="ease-in transition-all duration-150 text-gray-700 no-underline font-semibold hover:opacity-50">
                                    <span>CONTACT</span>
                                </NavLink>
                            </nav>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='ease-in transition-all duration-150 hover:opacity-50'><IoSearch /></span>
                                <span className='ease-in transition-all duration-150 hover:opacity-50'><FaUser /></span>
                                <div className='ease-in transition-all duration-150 hover:opacity-50 h-[50px] w-[50px] bg-gray-300 relative flex items-center justify-center rounded-[50%]'>
                                    <div className='h-[20px] w-[20px] bg-[#FE4C50] flex items-center justify-center text-white absolute -top-[5px] right-0 rounded-[50%]'>{basket.length}</div>
                                    <span><FaCartShopping /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}