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
        <div className="relative w-full z-50">
            <nav className="navbar fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-16 py-6 my-7 mx-2 rounded-full sm:mx-6 md:mx-14 xl:mx-14 2xl:mx-52 " >
                <Link to={'/'}>
                <figure className='flex items-center w-16 h-16'>
                    <img src='https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png' alt="Logo Shinden" className='neon-logo' />
                </figure>
                </Link>
                <div className='flex flex-row justify-around'>
                    <ul className='hidden md:flex flex-row space-x-8 items-center 2xl:mx-16 '>
                        <li>
                            <Link to="/calendary" className='font-oswald text-white text-shadow-hover  '>CALENDARIO</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='font-oswald text-white text-shadow-hover  '>TIENDA</Link>
                        </li>
                        <li>
                            <Link to="/teams" className='font-oswald text-white text-shadow-hover   '>TEAMS</Link>
                        </li>
                        <li>
                            <Link to="/news" className='font-oswald text-white text-shadow-hover '>NOTICIAS</Link>
                        </li>
                    </ul>


                    <button 
                        className="block md:hidden text-white relative p-4 z-10" 
                        onClick={handleMenuToggle}
                    >
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 ' : '-my-2'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} style={{width:'24px', height: '2px', backgroundColor: 'currentColor'}} />
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'hidden' : 'my-0'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `} style={{width: '24px', height: '2px', backgroundColor: 'currentColor'}} />
                        <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45' : 'my-2'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `} style={{width: '24px', height: '2px', backgroundColor: 'currentColor'}} />
                    </button>

                    
                    <ul className='hidden 2xl:flex flex-row space-x-8 items-center'>
                        <li>
                        <a href="https://discord.com/invite/ukfDYRf3Wm" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/shindengg/" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://x.com/shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.tiktok.com/@shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className="text-2xl text-[#f9b6f9]" />
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>




                        <div className={`fixed md:hidden top-36 left-3 right-3 ${isMenuOpen ? 'flex' : 'hidden'} navbar rounded-3xl `}>
                        <nav className="h-full flex flex-1 flex-col overflow-y-visible scrollbar-custom">
                            <ul className="flex flex-col space-y-10 p-8 items-center">
                                <span className='font-oswald text-2xl p-0 m-0 text-[#f9b6f9]'>Menú</span>
                                <li>
                                <Link onClick={() => handleSectionClick('/calendary')} to="/calendary" className='font-oswald text-white text-shadow-hover xl:text-sm '>CALENDARIO</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/shop')} to="/shop" className='font-oswald text-white text-shadow-hover  xl:text-sm '>TIENDA</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/teams')} to="/teams" className='font-oswald text-white text-shadow-hover  xl:text-sm '>TEAMS</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                <Link onClick={() => handleSectionClick('/news')} to="/news" className='font-oswald text-white text-shadow-hover  xl:text-sm '>NOTICIAS</Link>
                                </li>
                                <hr className='h-[2px] w-full border-t-0 custom-gradient p-0 m-0' />
                                <li>
                                    <span className='text-white text-l justify-center p-0 m-0 flex items-center'>Ⓒ <b> 2024 ShindenGG.</b></span>
                                    <span className='text-white text-l justify-center p-0 m-0 flex items-center'><b>Team by Lit Killah and Spreen.</b></span>
                                </li>
                            </ul>
                    
                    


                                <ul className='flex flex-row justify-center items-center space-x-8 py-8 '>
                                    <li>
                                        <a href="https://discord.com/invite/ukfDYRf3Wm" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center ' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faDiscord} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/shindengg/" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faXTwitter} className="text-3xl text-[#f9b6f9]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@shindengg" className='transition-transform duration-300 ease-in-out transform hover:scale-125 flex items-center justify-center' target="_blank" rel="noopener noreferrer">
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
