import './AboutMePage.scss'
import hero1 from '../../assets/images/port-hero1.png'
import Hobbies from '../../components/Hobbies/Hobbies.jsx';
function AboutMePage(){
    
    return(
        <>
        <section className="about" id="about">
          <div className='about__container'>
            <div className='about__frame'>
             <img className='about__image' src={hero1} alt="image" />
             <h2 className='about__text'>Nice to meet you</h2>

            </div>
            <article className='about__article'>
                <h2 className='h2'>A little bit into my backgorund</h2>
                <p className='p1'>Hi, my name is Halimat. I am a <strong>software developer</strong>  and UI/UX designer with a diverse educational background. I hold bachelor’s degrees in Arts and Humanities and two master’s degrees—one in Public Affairs and the other in Business. These academic experiences have equipped me with strong critical thinking and problem-solving skills.
                I also have professional experience in retail loan sales in both the commercial banking and microfinance banking sectors. This has given me the drive to meet business targets while maintaining strong customer relationships.</p>
            </article>
            <article className='about__article'>
                <h2 className='h2'>My tech Journey</h2>
                <p className='p1'> My passion for technology began in 2022 when I decided to take a UI/UX design program. After working on several UX products alongside developers, I developed a strong interest in coding, which led me to pursue software development.</p>
            </article>
            <article className='about__article'>
                <h2 className='h2'>Currently</h2>
                <p className='p1'>I am focused on building user-centric, responsive, and dynamic website solutions. My expertise spans both <strong>front-end</strong> and <strong>back-end</strong> development, with a tech stack that includes <span className='about__java'>JavaScript</span>, <span className='about__react'>React</span>,<span className='about__html'>HTML</span> , <span className='about__css'>CSS</span>,<span className='about__sass'>Sass</span> , <span className='about__node'>Node.js</span> , <span className='about__express'>Express</span>,and  <span className='about__react'>RESTful APIs</span> .</p>
            </article>
            <article className='about__article'>
                <h2 className='h2'>Outside of workspace</h2>
                <p className='p1'>I love traveling, drawing, sewing, photography and just enjoying life whenever i am not working. Below are some of my outside of workspace activities that i curated.... </p>
            </article>
           
          </div>
        </section>
        <Hobbies />
        
        </>
    )
}
export default AboutMePage;