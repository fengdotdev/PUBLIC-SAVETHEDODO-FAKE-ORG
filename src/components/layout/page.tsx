import ButtomLinks from "../buttomlinks/page";
import Footer from "../footer/page";
import CustomHead from "../head/page";
import Navbar from "../navbar/page";

export default function Layout ( { children }:any )
{
    return (
        <body className="bg-dark flex flex-col">
            <div className="bg-light  max-lg:max-w-screen-lg">
                <CustomHead />
                <Navbar />
                <main className="pt-8 min-h-screen bg-light shadow-inner	">{ children }</main>
                <div className="mt-6">
                    <ButtomLinks />
                    <Footer />
                </div>

            </div>

            </body>
    );
}