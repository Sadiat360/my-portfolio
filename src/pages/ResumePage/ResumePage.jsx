import './ResumePage.scss';
import { useState } from 'react';
import {jsPDF} from 'jspdf'
import html2canvas from 'html2canvas'

function ResumePage(){

    const handleDownloadPDF = () => {
        
        const element = document.querySelector('.resume__container')

        html2canvas(element, {scale: 2}).then((canvas)=> {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
           
            pdf.save("Halimat_Yaya_Resume.pdf");
        }) 
       
      

    }

    return(
       <section className='resume'>
        <div className='resume__container'>
            <h1 className='resume__header h1'>Halimat Yaya - Full Stack Developer/UI-UX Designer 
            </h1>
            <ul className='resume__list'>
                <li className='resume__item'><a href="">halimatyayas@gmail.com</a></li>
                <li className='resume__item'><a href="">Linkk</a></li>
                <li className='resume__item'><a href="">github</a></li>
                <li className='resume__item'><a href="">+14038604026</a></li>
            </ul>
            <article className='resume__obj'>
               <p className='p1'>Full-stack engineer skilled in JavaScript, React, Mysql and Node, with experience building end-to-end products like AI tools, analytics, payments infrastructure, and user onboarding. Focused on delivering value through clean, maintainable code and consistently shipping impactful features. Comfortable with ambiguity, solving customer pain points, and working in fast-paced startup environments. Passionate about leveraging new technologies to improve development speed and performance.
               </p>
            </article>
           
            <p className='resume__heading'>Skills</p>
            <ul className='resume__skills_list'>
                <li className='resume__skills_item p1'>Backend: JavaScript, Node.js, Express, Python,REST APIs
                </li>
                <li className='resume__skills_item p1'>Databases: MySQL, PostgresQL

                </li>
                <li className='resume__skills_item p1'>Frontend: HTML5, CSS3, Saas, React, Bootstrap, Material UI, Responsive Design,Tailwind
                </li>
                <li className='resume__skills_item p1'>UI/UX: Figma, miro, Sketch
                </li>
                <li className='resume__skills_item p1'>DevOps: Heroku, Netlify, Google Cloud, Docker, 
                </li>
                <li className='resume__skills_item p1'>Infrastructure: Git, Github, Visual Studio Code, npm, Jira
                </li>
            </ul>
            <p className='resume__heading'>Experience</p>

            <div className='resume__box'>
                    <p className='resume__company'>Brainstation(BootCamp)</p>
                    <p className='resume__role'>Full-Stack Software Developer</p>
                    <p className='resume__date'>Oct 2024 -Jan 2025</p>
                </div>
            <ul className='resume__ex'>
                <li className='resume__ex_item p1'>Wrote front-end javascript code that accepts server side APIs.

                </li>
                <li className='resume__ex_item p1'>Responsive and Mobile-First Design: Ensured the application is fully responsive and optimized for mobile devices, improving accessibility for on-the-go users and increasing engagement metrics.

                </li>
                <li className='resume__ex_item p1'>Analytics Dashboard for Admins: Built an analytics dashboard for administrators to track user interactions, property views, and inquiries, providing valuable insights for business decision-making.

                </li>
              
            </ul>
            <div className='resume__box'>
                    <p className='resume__company'>Iklin App(CO-Founder)</p>
                    <p className='resume__role'>User Interface/User Experience Designer </p>
                    <p className='resume__date'>November 2022 - May 2024</p>
            </div>
            <ul className='resume__ex'>
                <li className='resume__ex_item p1'>Collaborated with a team of two designers and two developers to build an E-laundry app, securing Two million Naira in early seed investment.

                </li>
                <li className='resume__ex_item p1'>Conducted market research on African e-laundry companies, Co-Desigend a user centric interface, and designed weekly social media content, resulting in 35% increase in brand awareness and a 25% boost in early customer engagement.
                </li>
                <li className='resume__ex_item p1'>Collaborated with business developers to create compelling pitch decks and meeting materials. Highlighted IKLIN’s market potential and strategic approach.
                </li>
              
            </ul>
            <div className='resume__box'>
                    <p className='resume__company'>Sterling Bank Plc,Lagos Nigeria  </p>
                    <p className='resume__role'>Retail Banking Associate</p>
                    <p className='resume__date'>August 2021 - Feb 2022
                    </p>
            </div>
            <ul className='resume__ex'>
                <li className='resume__ex_item p1'>Achieved a 95% customer retention rate by delivering tailored financial solutions and maintaining exceptional service standards.
                </li>
                <li className='resume__ex_item p1'>Contributed to a 50% increase in branch revenue through loan sale of 100 Million Naira by identifying untapped market segments and cross-selling financial products effectively.
                </li>
                <li className='resume__ex_item p1'>Helped the branch recover over 30 million naira in loan deficit from clients through cold calling and follow ups.
                </li>
              
            </ul>
           
        </div>
          
        <button onClick={handleDownloadPDF}>Download Resume</button>
       
       </section>
    )
}
export default ResumePage;