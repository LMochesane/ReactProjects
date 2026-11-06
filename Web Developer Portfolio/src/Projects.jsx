import meHeadShot from './assets/meHeadShot.jpg';
import SprintDesk from './assets/SprintDesk.jpg';
import './Projects.css'

function Projects () {
    return(
        <>
        <section className="myProjects">
             <div className="MyWork">
                 <h4>
                     <p>WHAT I'VE BUILT</p>
                 </h4>
                 <p>Below I present the projects I have built until date.</p>
             </div>
            <section className="project-1">

                 <div className="project-1-image">
                     <img
                         className="project-1-img"
                         src={meHeadShot} 
                         alt="Relebohile Mochesane"
                     />
                 </div>

                 <div className="project-1-text">
                     <h2>This very website</h2>
                     {/* <br /> */}
                     <div className="projectDescription">
                          <p>A fully funtional website built using HTML, React and CSS. It stands as the first project and it is through it that I put 
                              into practice some fundamentals of react. It was built from scratch using React as the primary tool, showcasing my approach to web development.
                          </p>
                     </div>

                         <h3>Highlights from this project:</h3>
                         <p>- Creating and maintaining reusable components</p>
                         <p>- Ensuring the website's ineractivity  was maintained</p>
                         <p>- A sharpened sense of detail to obtain a seamless user experience</p>
                         {/* < br/> */}
                         <h5>React | HTML | CSS</h5>
                
                 </div>
            </section>


            <section className="project-2">

                 <div className="project-2-text">
                     <h2>SprintDesk</h2>
                     {/* <br /> */}
                     <div className="projectDescription">
                          <p>SprintDesk: A professional, enterprise-grade Kanban task management web application engineered with React,
                              Vite, custom CSS variables, and granula RBAC security scoping. Currently showcasing advanced client-side state and
                              analytics, with an upcoming goal to integrate a robust C#/.NET backend.
                          </p>
                     </div>

                         <h3>Highlights from this project:</h3>
                         <p>- React & Vite</p>
                         <p>- Granula RBAC Security Scoping</p>
                         <p>- State Management & Persistance</p>
                         {/* < br/> */}
                         <h5>Javascript | React | LocalStorage | CSS-Grid</h5>
                 </div>

                 <div className="project-2-image">
                    <a href="https://lmochesane.github.io/SprintDesk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-image-link"
                          aria-label="View SprintDesk project"
                          >
                     <img
                         className="project-2-img"
                         src={SprintDesk} 
                         alt="SprintDesk"
                        />
                    </a>
                 </div>

            
             </section>
        </section>
        </>
    )
}


export default Projects
