import './Hero.scss'
import heroOne from '../../assets/images/port-hero1.png'
import heroTwo from '../../assets/images/port-hero2.png'
import lineData from '../../assets/images/line.png'
import connectData from '../../assets/images/connect.png'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import mobLine from '../../assets/images/mobLine.png'
import connectmob from '../../assets/images/connectmob.png'


function Hero(){


    return(
        <section className="hero" id='hero'>
            <div className="hero__container">
                
                <div className='hero__image_wrap'>
                    <div className='hero__frame'>
                      <img className='hero__image' src={heroTwo} alt="image of me enjoying nature" />
                    </div>
                     <article className='hero__intro'>
                     <h1 className='hero__title h1'>Hi, I'm Halimat <span className='hero__span'> a Full Stack Developer </span>based in Calgary Canada
                     </h1>

                     </article>
                    

                    
                    <p>Welcome to my creative space</p>
                   <button className='hero__btn'><a href="https://docs.google.com/document/d/1_efzcRAFGKI8pLUD_raNWxsYJOxDQERXqBxv9_jVjM4/edit?usp=sharing">View Resume</a></button>
                   
                </div>
                <div className='hero__connect'>
                    <div className='hero__line'>
                        <img className='hero__line_img' src={lineData} alt="image" />
                    </div>
                   
                    <ul className='hero__list'>
                        <li className='hero__item'><a href=""><MdEmail className='hero__icon' /></a></li>
                        <li className='hero__item'><a href="https://github.com/Sadiat360"><FaGithub className='hero__icon'/></a></li>
                        <li className='hero__item'><a href="https://www.linkedin.com/in/halimatsadiat-yaya/"><FaLinkedinIn className='hero__icon' /></a></li>
                        <li className='hero__item'><a href=""><FaInstagram className='hero__icon'/></a></li>
                    </ul>
                    <img src={connectData} alt="let's connect" />
                    <div className='hero__line'>
                        <img className='hero__line_img' src={lineData} alt="image" />
                    </div>
                </div>
                <div className='connectMob'>
                    <div className='connectMob__line'>
                        <img className='connectMob__line_img' src={mobLine} alt="image" />
                    </div>
                   
                    <ul className='connectMob__list'>
                        <li className='connectMob__item'><a href=""><MdEmail className='hero__icon' /></a></li>
                        <li className='connectMob__item'><a href="https://github.com/Sadiat360"><FaGithub className='hero__icon'/></a></li>
                        <li className='connectMob__item'><a href="https://www.linkedin.com/in/halimatsadiat-yaya/"><FaLinkedinIn className='hero__icon' /></a></li>
                        <li className='connectMob__item'><a href=""><FaInstagram className='hero__icon'/></a></li>
                    </ul>
                    <p className='p1'>Let's Connect</p>
                    <div className='connectMob__line'>
                        <img className='connectMob__line_img' src={mobLine} alt="image" />
                    </div>
                </div>

            </div>

          

        </section>
    )
}
export default Hero;