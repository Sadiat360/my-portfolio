import './TechStack.scss'
import JsSvg from "../JsSvg/JsSvg";
import ReactSvg from '../ReactSvg/ReactSvg';
import HtmlSvg from '../HtmlSvg/HtmlSvg';
import MysqlSvg from '../MysqlSvg/MysqlSvg';
import SqlSvg from '../SqlSvg/SqlSvg.jsx';
import CssSvg from '../CssSvg/CssSvg';
import NodeSvg from '../NodeSvg/NodeSvg';
import SassSvg from '../SassSvg/SassSvg.jsx';
import morphData from '../../assets/images/morph.png'
import DevSvg from '../DevSvg/DevSvg.jsx';
import UISvg from '../UISvg/UISvg.jsx';
import { Link } from 'react-router-dom';

function TeckStack(){
    return(
        <section className="techStack">
            <h2 className=" techStack__heading h2">Teck Stack</h2>
            <div className="techStack__container">
                <div className="techStack__wrap">
                    <div className='techStack__frame_left'>
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