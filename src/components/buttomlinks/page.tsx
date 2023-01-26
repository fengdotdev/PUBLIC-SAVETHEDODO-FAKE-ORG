import Link from "next/link";
import { Buttomlinksbundle } from "../../data";


export default function ButtomLinks ()
{


    const buttomlinksbundle = Buttomlinksbundle;


    const s = buttomlinksbundle.map( ( e ) =>
    {
        return (
            <div key={ e.title } className="flex flex-col px-3 ">
                <p className="font-bold">{ e.title }</p>
                <ul>
                    { e.content.map( ( e ) =>
                    {
                        return (
                            <li key={ e.title + e.url }><Link href={ e.url }>{ e.title }
                            </Link></li>
                        );
                    } ) }
                </ul>
            </div>
        );
    } );



    return (
        <div className="bg-light py-4 flex  flex-row  justify-around  space-x-5">

            { s }
        </div>
    );

}