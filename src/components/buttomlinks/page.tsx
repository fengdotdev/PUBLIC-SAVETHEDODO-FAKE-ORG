import Link from "next/link";
import { Buttomlinksbundle } from "../../data";


export default function ButtomLinks ()
{


    const buttomlinksbundle = Buttomlinksbundle;


    const s = buttomlinksbundle.map( ( e ) =>
    {
        return (
            <div key={ e.title } className="bg-light border-1 rounded shadow-2xl shadow-dark m-3 p-5 flex flex-col sm:w-3/12">
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
        <div className=" pt-4  pb-20 flex flex-col  sm:flex-row  justify-around  ">

            { s }
        </div>
    );

}