import Link from "next/link";
import { links } from "../../../typings";
import { Buttomlinksbundle } from "../../data";


export default function ButtomLinks ()
{


    const buttomlinksbundle = Buttomlinksbundle


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