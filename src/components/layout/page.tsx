import ButtomLinks from "../buttomlinks/page";
import Footer from "../footer/page";
import CustomHead from "../head/page";
import Navbar from "../navbar/page";

export default function Layout ( { children }:any )
{
    return (
        <body className="bg-dark">
            <CustomHead />
            <Navbar />
            <main className="h-screen bg-light">{ children }</main>
            <ButtomLinks/>
            <Footer />
            </body>
    );
}