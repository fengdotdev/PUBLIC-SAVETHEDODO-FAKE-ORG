import Image from 'next/image';



export default function Logo ()
{
    return (
        <div className="grid-element">
            <Image className="w-screen h-[32rem]"
                src="/img/Dossier_Dodo_Character.png"
                width="200"
                height="200"
                alt="Picture of the author"
            />
        </div>
    );

}