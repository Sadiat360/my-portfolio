import './Footer.scss'
import LogoData from '../../assets/images/logo.png'

function Footer(){
    return(
       <footer className="footer">
                 <div className='footer__container'>
                    <figure>
                        <img src={LogoData} alt="logo" />
                    </figure>
                    <p>Halimat Yaya &copy; 2025 | Calagry,Canada</p>

                 </div>
       </footer>
    )
}
export default Footer;