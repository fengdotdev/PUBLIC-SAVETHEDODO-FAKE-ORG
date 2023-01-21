import Link from "next/link";
import { links } from "../../../typings";

type footerlinks = links[]

export default function ButtomLinks ()
{


    const buttomlinksbundle: footerlinks = [
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


    const s = buttomlinksbundle.map( ( e ) =>
    {
        return (
            <>
                <p className="font-bold">{ e.title }</p>
                <ul>
                    { e.content.map( ( e ) =>
                    {
                        return (
                            <li id="id={e.title+e.url}"><Link href={ e.url }>{ e.title }
                            </Link></li>
                        );
                    } ) }
                </ul>
            </>
        );
    } );



    return (
        <div className="flex flex-row">

            { s }
        </div>
    );

}