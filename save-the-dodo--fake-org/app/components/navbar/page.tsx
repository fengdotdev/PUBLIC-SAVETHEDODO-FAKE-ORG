import Logo from "../logo/page";

export default function Navbar ()
{
    return (
        <nav className="p-3 bg-dark flex flex-row justify-between	 ">
            <div className="w-10 h-10">
                <Logo />
            </div>
            <ul className="flex flex-row  space-x-8">
                <li className="text-light">Discover</li>
                <li className="text-light">Get Involve </li>
                <li className="text-light">About Us</li>

            </ul>
        </nav>
    );
}