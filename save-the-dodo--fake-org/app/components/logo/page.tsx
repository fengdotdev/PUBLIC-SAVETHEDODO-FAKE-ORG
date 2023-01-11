import Image from 'next/image';



export default function Logo ()
{
    return (
        <div className="flex flex-row items-center">

            <Image className="pt-0"
                src="/img/Dossier_Dodo_Character.png"
                width="40"
                height="40"
                alt="Picture of the author"
            />
            <h1 className="text-light font-bold">Save The Dodo</h1>
        </div>
    );

}