import './Footer.scss'
import LogoData from '../../assets/images/logo.png';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer(){
    return(
       <footer className="footer">
                 <div className='footer__container'>
                    <figure className='footer__figure'>
                       <Link to='/'><img className='footer__logo' src={LogoData} alt="logo" /></Link> 
                    </figure>
                   <h2 className='footer__contact h2'>Contact me</h2>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href="mailto:halimatyayas@gmail.com"><MdEmail className='hero__icon' /></a>
                        </li>
                        <li className='footer__item'>
                        <a href="https://github.com/Sadiat360"><FaGithub className='hero__icon'/></a>
                        </li>
                        <li className='footer__item'>
                        <a href="https://www.linkedin.com/in/halimatsadiat-yaya/"><FaLinkedinIn className='hero__icon' /></a>    
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