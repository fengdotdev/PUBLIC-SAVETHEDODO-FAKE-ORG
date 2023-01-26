import Navbar from "../navbar/page";

export default function Layout ( { children }:any )
{
    return (
        <>
            <Navbar />
            <main>{ children }</main>
        </>
    );
}