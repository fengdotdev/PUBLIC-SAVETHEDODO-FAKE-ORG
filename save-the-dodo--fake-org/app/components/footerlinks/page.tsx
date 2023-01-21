import Link from "next/link";
import { links } from "../../../typings";





type footerlinks = links[]

export default function FooterLinks ()
{

    const footerlinksbundle: footerlinks = [
        {
            title: "left",
            content: [ { title: "some", url: "/some" } ]
        },
        {
            title: "center",
            content: [
                { title: "some", url: "/some" },
                { title: "some", url: "/some" },
                { title: "some", url: "/some" }
            ]
        },
        {
            title: "right",
            content: [ { title: "some", url: "/some" } ]
        },

    ];



    const s = footerlinksbundle.map( ( e ) =>
    {
        return (
            <div>
                <p className="font-bold">{ e.title }</p>
                <ul>
                    { e.content.map( ( e ) =>
                    {
                        return (
                            <li><Link href={ e.url }>{ e.title }
                            </Link></li>
                        );
                    } ) }
                </ul>
            </div>

        );
    } );

    return (
        <div className="flex flex-row justify-center space-x-8 pb-5 text-light text-bold">
            { s }
        </div>
    );

}


