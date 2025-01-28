import './ProjectItem.scss'
import { useState } from 'react';
import photosData from '../../data/photos.json'


function ProjectItem(){
      const [photos, setPhotos] = useState([photosData]);

   

    return(
        <>
             {photosData.map((photo,index)=>{
                return(
             <div className='projects__frame'>
                    <div className='projects__box' key={index}>
                        <img className='projects__image'src={photo.photo} alt="image" />
                    </div>
                    <p>{photo.projectName}</p>
                    <p>{photo.description}</p>
                    <ul>
                    {photo.stack?.map((stack,index)=>{
                        <li key={index}>
                            {photo.stack}

                        </li>
                    })}

                    </ul>

          </div>
               )
            })}
        </>
       
    )
}
export default ProjectItem;