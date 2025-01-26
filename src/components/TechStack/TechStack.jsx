import './TechStack.scss'
import JsSvg from "../JsSvg/JsSvg";

function TeckStack(){
    return(
        <section className="techStack">
            <h2 className="h2">Teck Stack</h2>
            <div className="techStack__container">
                <div className="techStack__wrap">
                    <div className="techStack__box">
                       <JsSvg className='techStack__image' />
                    </div>
                    <div className="techStack__box">
                       <JsSvg className='techStack__image' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TeckStack;