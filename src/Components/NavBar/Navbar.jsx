import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate(); // Hook de react-router para navegación

    const handleSectionClick = (path) => {
        // Cambia la ruta y cierra el menú
        navigate(path);
        setIsMenuOpen(false);
    };

    return ( 
        <>  
        <div className="relative z-50 w-full">
            <nav className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-16 py-6 mx-2 rounded-full navbar my-7 sm:mx-6 md:mx-14 xl:mx-14 2xl:mx-52 " >
                <Link to={'/'}>
                <figure className='flex items-center w-16 h-16'>
                    <img src='https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png' alt="Logo Shinden" className='neon-logo' />
                </figure>
                </Link>
                <div className='flex flex-row justify-around'>
                    <ul className='flex-row items-center hidden space-x-8 md:flex 2xl:mx-16 '>
                        <li>
                            <Link to="/calendary" className='text-white font-oswald text-shadow-hover '>CALENDARIO</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='text-white font-oswald text-shadow-hover '>TIENDA</Link>
                        </li>
                        <li>
                            <Link to="/teams" className='text-white font-oswald text-shadow-hover '>TEAMS</Link>
                        </li>
                        <li>
                            <Link to="/news" className='text-white font-oswald text-shadow-hover '>NOTICIAS</Link>
                        </li>
                    </ul>


                    <button 
                        className="relative z-10 block p-4 text-white md:hidden" 
                        onClick={handleMenuToggle}
                    >
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 ' : '-my-2'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} style={{width:'24px', height: '2px', backgroundColor: 'currentColor'}} />
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'hidden' : 'my-0'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `} style={{width: '24px', height: '2px', backgroundColor: 'currentColor'}} />
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45' : 'my-2'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `} style={{width: '24px', height: '2px', backgroundColor: 'currentColor'}} />
                    </button>

                    
                    <ul className='flex-row items-center hidden space-x-8 2xl:flex'>
                        <li>
                        <a href="https://discord.com/invite/ukfDYRf3Wm" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/shindengg/" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://x.com/shindengg" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.tiktok.com/@shindengg" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>




                        <div className={`fixed md:hidden top-36 left-3 right-3 ${isMenuOpen ? 'flex' : 'hidden'} navbar rounded-3xl `}>
                        <nav className="flex flex-col flex-1 h-full overflow-y-visible scrollbar-custom">
                            <ul className="flex flex-col items-center p-8 space-y-10">
                                <span className='font-oswald text-2xl p-0 m-0 text-[#f9b6f9]'>Menú</span>
                                <li>
                                <Link onClick={() => handleSectionClick('/calendary')} to="/calendary" className='text-white font-oswald text-shadow-hover xl:text-sm '>CALENDARIO</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/shop')} to="/shop" className='text-white font-oswald text-shadow-hover xl:text-sm '>TIENDA</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/teams')} to="/teams" className='text-white font-oswald text-shadow-hover xl:text-sm '>TEAMS</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/news')} to="/news" className='text-white font-oswald text-shadow-hover xl:text-sm '>NOTICIAS</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                    <span className='flex items-center justify-center p-0 m-0 text-white text-l'>Ⓒ <b> 2024 ShindenGG.</b></span>
                                    <span className='flex items-center justify-center p-0 m-0 text-white text-l'><b>Team by Lit Killah and Spreen.</b></span>
                                </li>
                            </ul>
                    
                    


                                <ul className='flex flex-row items-center justify-center py-8 space-x-8 '>
                                    <li>
                                        <a href="https://discord.com/invite/ukfDYRf3Wm" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125 ' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faDiscord} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/shindengg/" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/shindengg" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faXTwitter} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@shindengg" className='flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTiktok} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                </ul>
                        </nav>
                        </div>
        </div>
        </>
    );
}
 
export default Navbar;
