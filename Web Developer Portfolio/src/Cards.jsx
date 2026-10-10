import html from './assets/html.png';
import css from './assets/css.jpg';
import figma from './assets/figma.jpg';
import github from './assets/github.jpg';
import javassript from './assets/javassript.png';
import reactjs from './assets/reactjs.jpg';

function Cards() {
    return(
        <section className="Expertise-Cards">
         <div className="myExpertise">
            <h4>
                <p>MY TOOLKIT</p>
            </h4>
            <p>Designing and engineering modern, high performance web applications.</p>
         </div>

        
           <div className="cards">
               <div className="tech-card">
                <img
                    className="tech-card-img"
                    src={html} 
                    alt="html"
                />
                HTML5
                  <p>To provide clean and structured content.</p>
                </div>

                <div className="tech-card">
                    <img
                    className="tech-card-img"
                    src={css} 
                    alt="css"
                />
                CSS3
                  <p>Styling interfaces with design in mind.</p>
                </div>

                <div className="tech-card">
                    <img
                    className="tech-card-img"
                    src={javassript} 
                    alt="Javascript"
                />
                JAVASCRIPT
                  <p>Making websites interactive, functional and dynamic.</p>
                </div>

                <div className="tech-card">
                    <img
                    className="tech-card-img"
                    src={reactjs} 
                    alt="react"
                />
                
                REACT
                  <p>Building reusable components for modern interfaces.</p>
                </div>

                <div className="tech-card">
                    <img
                    className="tech-card-img"
                    src={github} 
                    alt="github"
                />
                GITHUB
                  <p>Managing projects, code, changes and progress.</p>
                </div>

                <div className="tech-card">
                    <img
                    className="tech-card-img"
                    src={figma} 
                    alt="figma"
                />
                FIGMA
                  <p>Visualising and designing concepts before construction.</p>
                </div>
                < br/>

            </div>
        </section>
    )
}




         






export default Cards