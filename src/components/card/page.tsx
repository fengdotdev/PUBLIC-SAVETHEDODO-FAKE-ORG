import Image from 'next/image';
import Link from 'next/link';

export default function Card ()
{




    return (

        <div className='shadow-2xl mx-5 my-5 pb-5 bg-primary  w-11/12 sm:w-3/12  rounded-lg shadow-dark hover:shadow-primary'>
            <Image className="h-fit"
                src="./img/wallpaperflare.com_wallpaper.jpg"
                width="800"
                height="1000"
                sizes=""
                alt="Picture of the author"
            />
            <div className="  py-3 px-3  ">

                <div className='mb-10'>
                    <p className="text-sm  text-light">posted on 24 jan 2023</p>
                    <h1 className="text-2xl text-light font-bold">Title</h1>
                    <p className="text-xl italic  text-light
">Lorem ipsum dolor sit amet consectetur addipisicing elit.</p>
                </div>



                <Link className="  my-2 p-3 px-6 pt-2 text-light rounded-lg baseline w-full bg-dark hover:bg-light hover:text-primary text-center" href="/join">Join!</Link>

            </div>

        </div>

    );
};