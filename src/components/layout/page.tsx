import ButtomLinks from "../buttomlinks/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";

export default function Layout ( { children }:any )
{
    return (
        <>
            <Navbar />
            <main>{ children }</main>
            <ButtomLinks/>
            <Footer/>
            </>
    );
}