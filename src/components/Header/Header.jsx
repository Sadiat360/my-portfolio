import './Header.scss';

function Header(){
    return(
        <header className='header'>
         <div className='header__box'>
           <Link to='/HomePage'> <p className='header__logo-text'>Halimat Yaya</p></Link> 
           
         </div>
         <nav className='header__nav'>
            <ul className='header__list'>
               <Link to='/HomePage'><li className='header__item'>Home</li></Link> 
               <Link to='/AboutMePage'><li className='header__item'>About Me</li></Link> 
               <Link to='/CertificatePage'><li className='header__item'>Certificates</li></Link> 
            </ul>
           
         </nav>
         <nav className='header__nav-mob'>
            <MenuBar />
            <ul className='header__list'>
               <Link to='/HomePage'><li className='header__item'>Home</li></Link> 
               <Link to='/AboutMePage'><li className='header__item'>About Me</li></Link> 
               <Link to='/CertificatePage'><li className='header__item'>Certificates</li></Link> 
            </ul>
             ///// mobile height will take full width and i can adopt snaps header home/filter icon logic
         </nav>



       </header>
    )
}
export default Header;