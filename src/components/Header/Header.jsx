import './Header.scss';
import {Link}  from 'react-router-dom';
import MenuBar from '../../helpers/MenuBar/MenuBar.jsx'
import { useState } from 'react';
import CloseBar from '../../helpers/CloseBar/CloseBar.jsx';
import logoData from '../../assets/images/logo.png'

function Header(){
    const [openNav, setOpenNav]= useState([]);

    function toggleMenuBar(){
       setOpenNav(!openNav);
    }
   
    return(
        <header className='header'>
         <div className='header__box'>
           <Link to='/'><img src={logoData} className='header__logo'/></Link> 
           
         </div>
         <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'> <Link to='/'>Home</Link> </li>
              <li className='header__item'> <Link to='/FullStackPage'>Software Dev</Link> </li>
              <li className='header__item'> <Link to='/UXPage'>UI/UX</Link> </li>
              <li className='header__item'> <Link to='/AboutMePage'>About Me</Link> </li>
              <li className='header__item'><Link to='/CertificatePage'>Certificates</Link></li>
            </ul>
           
         </nav>
         <button  className="header__menu-btn" 
                  onClick={toggleMenuBar} 
                  aria-label='Toggle Menu'>
                  <MenuBar />
         </button> 
         {openNav === true ? ( <nav className='header__nav-mob'>
          
          <div className='header__mobNav'>
              <button  className="header__close-btn"
               onClick={toggleMenuBar} 
               aria-label='Close Menu'><CloseBar/></button>

               <ul className='header__list-mob'>
                     <li className='header__item'> <Link to='/'>Home</Link> </li>
                     <li className='header__item'> <Link to='/FullStackPage'>Software Dev</Link> </li>
                     <li className='header__item'> <Link to='/UXPage'>UI/UX</Link> </li>
                     <li className='header__item'> <Link to='/AboutMePage'>About Me</Link> </li>
                     <li className='header__item'><Link to='/CertificatePage'>Certificates</Link></li>
               </ul>
            </div>
         </nav>)  : null}



       </header>
    )
}
export default Header;