import './MoreHobbies.scss'
import hobbies1Data from '../../data/hobbies1.json';
import hobbies2Data from '../../data/hobbies2.json';
import hobbies3Data from '../../data/hobbies3.json';
import { useState } from 'react';


function MoreHobbies(){
    const [hobbies,setHobbies] = useState([hobbies1Data]);
    const [hobbiesTwo,setHobbiesTwo] = useState([hobbies2Data]);
    return(
        <>
       
        <div className='more__wrap'>
           <div className='more__container'>
                {hobbies1Data.map((hobby,index)=>{
                    return(
                        
                            <figure  key={index} className='more__box'>
                                <img className='more__image' src={hobby.image} alt="images" />
                                <p className='p2'>{hobby.location}</p>
                            </figure>        
                      
                    )
                })}
            </div>

        </div>
        <div className='more__wrap'>
           <div className='more__container' >
             {hobbies2Data.map((hobby,index)=>{
                 return(
                    
                         <figure key={index} className='more__box'>
                             <img className='more__image' src={hobby.image} alt="images" />
                             <p>{hobby.location}</p>
                         </figure>
                       
                
                   
                 )
             })}
            </div>

        </div>
        <div className='more__wrap'>
           <div className='more__container'>
                {hobbies3Data.map((hobby,index)=>{
                    return(
                        
                            <figure   key={index} className='more__box'>
                                <img className='more__image' src={hobby.image} alt="images" />
                                <p className='p2'>{hobby.location}</p>
                            </figure>        
                      
                    )
                })}
            </div>

        </div>   
       
       </>
    )
}
export default MoreHobbies;