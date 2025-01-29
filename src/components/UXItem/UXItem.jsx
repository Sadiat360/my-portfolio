import './UXItem.scss';
import UXData from '../../data/ux.json'
import { useState } from 'react';
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { TbUxCircle } from "react-icons/tb";


function UXItem(){
    const [images, setImages] = useState([UXData]);

    return(
        <>
        {UXData.map((image,index)=>{
           return(
             <div className='ux__frame'>
                
                  <div className='ux__box' key={index}>
                  <a  href={image.url}>
                     <img className='ux__image'src={image.image} alt="image" />
                  </a>
                   </div>
                   <div className='ux__wrap'>
                       <p className='ux__title'>{image.projectName}</p>
                       <p className='ux__description p1'>{image.description}</p>
                       <ul className='ux__list'>
                       {image.tool?.map((element, stackIndex)=>(
                           <li className='ux__item p1' key={stackIndex}>
                               {element}

                           </li>
                       ))}

                       </ul>
                       <div className='ux__links'>
                          <a className='ux__ref p1' href={image.prototype}>
                              <p className='ux__txt p1'>Demo</p>
                              <LuSquareArrowOutUpRight /> 
                          </a>
                          <a className='ux__ref p1' href={image.casestudy}>
                              <p className='ux__txt p1'>Case Study</p>
                              <TbUxCircle />
                          </a>
                   </div>

                   </div>
                  
             </div>
          )
       })}
   </>
    )
}
export default UXItem;