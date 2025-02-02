import './FullStackPage.scss'
import ProjectItem from "../../components/ProjectItem/ProjectItem";



function FullStackPage(){
    return(
        <section className="projects" id='projects'>
          
            <div className="projects__container">
                <h1 className="projects__heading h1">Software Development Projects</h1>
                <ProjectItem />
            </div>
        </section>
    )
}
export default FullStackPage;