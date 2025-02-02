import './ProjectItem.scss'
import { useState } from 'react';
import photosData from '../../data/photos.json'
import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


function ProjectItem(){
      const [photos, setPhotos] = useState([photosData]);

   

    return(
        <>
             {photosData.map((photo,index)=>{
                return(
                  <div className='projects__frame'>
                     
                       <div className='projects__box' key={index}>
                       <a  href={photo.url}>
                          <img className='projects__image'src={photo.photo} alt="image" />
                       </a>
                        </div>
                        <div className='projects__wrap'>
                            <p className='projects__title'>{photo.projectName}</p>
                            <p className='projects__description p1'>{photo.description}</p>
                            <p className='p1'>{photo.myRole}</p>
                            <ul className='projects__list'>
                            {photo.stack?.map((element, stackIndex)=>(
                                <li className='projects__item p3' key={stackIndex}>
                                    {element}
    
                                </li>
                            ))}
    
                            </ul>
                            <div className='projects__links'>
                               <a className='projects__ref p1' href={photo.url}>
                                   <p className='projects__txt p1'>Demo</p>
                                   <LuSquareArrowOutUpRight /> 
                               </a>
                               <a className='projects__ref p1' href={photo.code}>
                                   <p className='projects__txt p1'>Code</p>
                                   <FaGithub/>
                               </a>
                        </div>
    
                        </div>
                       
                  </div>
               )
            })}
        </>
       
    )
}
export default ProjectItem;