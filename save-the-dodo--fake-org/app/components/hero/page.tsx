import Image from 'next/image';



export default function Hero ()
{
    return (
        <div className="grid-element">
            <Image className="w-screen h-[32rem]"
                src="/img/hero.jpg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Picture of the author"
            />
        </div>
    );

}