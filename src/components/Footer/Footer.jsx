import './Footer.scss'
import LogoData from '../../assets/images/logo.png';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
       <footer className="footer">
                 <div className='footer__container'>
                    <figure className='footer__figure'>
                        <img className='footer__logo' src={LogoData} alt="logo" />
                    </figure>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <MdEmail className='hero__icon' />
                        </li>
                        <li className='footer__item'>
                            <FaGithub className='hero__icon'/>

                        </li>
                        <li className='footer__item'>
                            <FaLinkedinIn className='hero__icon' />
                        </li>
                        <li className='footer__item'>
                            <FaInstagram className='hero__icon' />
                        </li>
                    </ul>
                    <p className='footer__copy'>Halimat Yaya &copy; 2025 | Calagry,Canada</p>

                 </div>
       </footer>
    )
}
export default Footer;