import { FooterText } from "../../data";
import FooterLinks from "../footerlinks/page";

export default function Footer ()
{


    const footertext = FooterText ? FooterText : "";

    return (
        <footer className="mb-auto bg-primary py-6 text-center shadow-2xl	">
            <FooterLinks/>
            <hr className=" h-1 mx-auto mb-2 w-1/3 border-light " />
            <h1 className="text-light ">{ footertext }</h1>
        </footer>
    );
}