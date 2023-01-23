import Footer from './components/footer/page';
import ButtomLinks from './components/buttomlinks/page';
import Navbar from './components/navbar/page';
import './globals.css';








export default function RootLayout ( { children }: {
    children: React.ReactNode;
} )
{
    return (
        <html lang="en">
            <body className='flex flex-col h-screen'>
                <Navbar />
                <section className='flex-grow'>
                    { children }
                </section>
                <ButtomLinks/>
                <Footer />
            </body>
        </html>
    );
}