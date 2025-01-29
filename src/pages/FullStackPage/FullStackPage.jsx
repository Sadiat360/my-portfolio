import './FullStackPage.scss'
import ProjectItem from "../../components/ProjectItem/ProjectItem";



function FullStackPage(){
    return(
        <section className="projects">
            <h1 className="projects__heading h1">Software Development Projects</h1>
            <div className="projects__container">
                <ProjectItem />
            </div>
        </section>
    )
}
export default FullStackPage;