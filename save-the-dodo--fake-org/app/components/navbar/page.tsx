'use client';

import { useState } from "react";
import Logo from "../logo/page";
import Link from "next/link";





export default function Navbar (props :{})
{
    const [ isMenuOpen, setMenuOpen ] = useState( false );
    return (
        <nav className="p-3 bg-dark justify-between	items-center ">
            <div className="flex flex-row justify-between	items-center ">
                <div className="">
                    <Logo />
                </div>
                <ul className="hidden md:flex flex-row  space-x-8">
                    <li className="text-light">Discover</li>
                    <li className="text-light">Get Involve </li>
                    <li className="text-light">About Us</li>
                </ul>
                <a className="hidden p-3 px-6 pt-2 text-light rounded-full baseline  md:block bg-primary hover:bg-light hover:text-primary" href="">Join!</a>
                <button
                    id="menu-btn"
                    onClick={ () => setMenuOpen( !isMenuOpen ) }
                    className="  p-3 px-6 pt-2  rounded-full baseline bg-transparent text-light focus:outline-none md:hidden"
                >{ isMenuOpen ? "x" : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg> }



                </button>
            </div>

            <ul className={ `${ isMenuOpen ? "block" : "hidden" } md:hidden flex flex-col items-center space-y-1 w-auto text-primary bg-light rounded-lg m-1 p-2` }>
                <li className="">Discover</li>
                <li className="">Get Involve </li>
                <li className="">About Us</li>
                <li className="p-2">
                    <Link className="  my-2 p-3 px-6 pt-2 text-light rounded-lg baseline w-full bg-primary hover:bg-light hover:text-primary text-center" href="/join">Join!</Link>
                </li>
            </ul>
        </nav>
    );
}