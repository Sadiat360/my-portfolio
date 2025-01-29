import './TechStack.scss'
import JsSvg from "../../helpers/JsSvg/JsSvg.jsx";
import ReactSvg from '../../helpers/ReactSvg/ReactSvg';
import HtmlSvg from '../../helpers/HtmlSvg/HtmlSvg';
import MysqlSvg from '../../helpers/MysqlSvg/MysqlSvg';
import SqlSvg from '../../helpers/SqlSvg/SqlSvg.jsx';
import CssSvg from '../../helpers/CssSvg/CssSvg';
import NodeSvg from '../../helpers/NodeSvg/NodeSvg';
import SassSvg from '../../helpers/SassSvg/SassSvg.jsx';
import morphData from '../../assets/images/morph.png'
import DevSvg from '../../helpers/DevSvg/DevSvg.jsx';
import UISvg from '../../helpers/UISvg/UISvg.jsx';
import { Link } from 'react-router-dom';

function TeckStack(){
    return(
        <section className="techStack">
            <h2 className=" techStack__heading h2">Teck Stack</h2>
            <div className="techStack__container">
                <div className="techStack__wrap">
                    <div className='techStack__frame'>
                       <div className="techStack__box">
                          <JsSvg className='techStack__image' />
                       </div>
                       <div className="techStack__box">
                          <ReactSvg className='techStack__image' />
                       </div>
                       <div className="techStack__box">
                          <HtmlSvg className='techStack__image' />
                       </div>
                       <div className="techStack__box">
                          <MysqlSvg className='techStack__image' />
                       </div>
                    </div>

                  <div className='techStack__frame'>
                       <div className="techStack__box">
                           <SqlSvg className='techStack__image' />
                        </div>
                        <div className="techStack__box">
                           <CssSvg className='techStack__image' />
                        </div>
                        <div className="techStack__box">
                           <NodeSvg className='techStack__image' />
                        </div>
                        <div className="techStack__box">
                           <SassSvg className='techStack__image' />
                        </div>

                  </div>
                   
                    
                </div>
            </div>

            <div  className='fullStack'> 
                <Link to='/FullStackPage'> 
                     <div className='fullStack__container'>
                         <img  className='fullStack__image' src={morphData} alt="image" />
                         <DevSvg className='fullStack__icon'/>
                         <article className='fullStack__text-box'>
                         <p className='fullStack__text p1'>Full Stack Development Projects</p>
                         </article>  
                     </div>
                </Link>
                <Link to='/UXPage'>
                    <div className='fullStack__container'>
                           <img  className='fullStack__image' src={morphData} alt="image" />
                           <UISvg className='fullStack__icon'/>
                           <article className='fullStack__text-box'>
                             <p className='fullStack__text p1'>User Interface/User Experience Design Projects</p>
                           </article>
                          
                    </div>
                </Link> 
                   

            </div>
            
        </section>
    )
}
export default TeckStack;