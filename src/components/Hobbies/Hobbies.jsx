import './Hobbies.scss';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import personal12 from '../../assets/images/personal 12.png'
import personal13 from '../../assets/images/personal 13.png'
import personal14 from '../../assets/images/personal 14.png'
import MoreHobbies from '../MoreHobbies/MoreHobbies.jsx';

function Hobbies(){
    const [isOpen, setIsOpen] = useState(false);
    const [isLottieVisible, setIsLottieVisibe] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [isMoreVisible, setIsMoreVisible] = useState(true);

        function handleMoreClick(){
            setIsOpen(true);
            setIsLottieVisibe(true);
            setIsMoreVisible(false);
            
        }
        ///sleep function to simulate delay
        async function sleep(millis){
           return new Promise(resolve => setTimeout(resolve, millis))
        }
        const handleLottieComplete = () =>{
            setShowImages(true);
            setIsLottieVisibe(false);
           
        }
    
        useEffect(()=>{
            if(isOpen){
                setShowImages(false);
    
                const timer = setTimeout(()=> {
                    setIsLottieVisibe(false);
                    setShowImages(true);
                }, 2000);
                return () => clearTimeout(timer);
            }

        }, [isOpen]);
    
    return(
        <>
        
        <section className='hobbies'>
             <div className='hobbies__wrap'>
                <div className='hobbies__container'>
                   <div className='hobbies__frame'>
                      <img className='hobbies__image' src={ personal12} alt="image" />
                     </div>
                     <div className='hobbies__frame'>
                      <img className='hobbies__image' src={ personal13} alt="image" />

                     </div>
                     <div className='hobbies__frame'>
                      <img className='hobbies__image' src={ personal14} alt="image" />

                     </div>

                </div>
                    
                     {isMoreVisible &&   !isOpen&& (<button className='hobbies__btn'
                    onClick={handleMoreClick}>More + </button>)}
                     {isOpen &&  isLottieVisible &&  (<DotLottieReact className='about__loading' 
                       src="https://lottie.host/0cc546fd-0dd5-47df-bc9e-1c81fd4957d4/7qW1aCHE3a.lottie"
                       loop={false}
                       autoplay
                       onComplete={handleLottieComplete}
              /> )}
              
             </div>
        
         
      </section>
      <section className='more'>
          {showImages ? ( <MoreHobbies/>): null}
      </section>
      </>
       
    )
}
export default Hobbies;