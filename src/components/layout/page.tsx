import ButtomLinks from "../buttomlinks/page";
import Footer from "../footer/page";
import CustomHead from "../head/page";
import Navbar from "../navbar/page";

export default function Layout ( { children }:any )
{
    return (
        <>
            <CustomHead />
            <Navbar />
            <main className="h-5/6	">{ children }</main>
            <ButtomLinks/>
            <Footer/>
            </>
    );
}