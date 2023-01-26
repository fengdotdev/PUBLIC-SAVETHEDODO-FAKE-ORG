import Link from "next/link";
import { Footerlinksbundle } from "../../data";






export default function FooterLinks ()
{
    const footerlinksbundle = Footerlinksbundle;



    const s = footerlinksbundle.map( ( e ) =>
    {
        return (
            <div key={ e.title }>
                <ul className="mx-2 flex flex-row  flex-wrap justify-center space-x-6">
                    { e.content.map( ( e ) =>
                    {
                        return (
                            <li key={ e.title + e.url } ><Link href={ e.url }>{ e.title }
                            </Link></li>
                        );
                    } ) }
                </ul>
            </div>

        );
    } );

    return (
        <div className="flex flex-col justify-center space-x-8 pb-5 text-light text-bold">
            { s }

        </div>
    );

}


