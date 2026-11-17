import html from './assets/html.png';
import css from './assets/css.png';
import figma from './assets/figma.png';
import github from './assets/github.png';
import javascript from './assets/javascript.png';
import reactjs from './assets/reactjs.png';
import csharp from './assets/csharp.png';
import dotnet from './assets/dotnet.png';
import './Cards.css';

function Cards() {
    return(
        <section className="Expertise-Cards">
         <div className="myExpertise">
            <h4>
                <p>MY TOOLKIT</p>
            </h4>
            <p>Designing, engineering, and deploying robust , high performance enterprise applications.</p>
         </div>

           <div className="cards">
                <div className="tech-card">
                 <img className="tech-card-img" src={html} alt="html" />
                </div>

                <div className="tech-card">
                 <img className="tech-card-img" src={css} alt="css" />
                </div>

                <div className="tech-card">
                 <img className="tech-card-img" src={javascript} alt="javascript" />
                </div>

                <div className="tech-card">
                    <img className="tech-card-img" src={reactjs} alt="reactjs" />
                </div>

                <div className="tech-card">
                    <img className="tech-card-img" src={dotnet} alt="dotnet" />
                </div>

                <div className="tech-card">
                    <img className="tech-card-img" src={csharp} alt="csharp" />
                </div>

                <div className="tech-card">
                    <img className="tech-card-img" src={figma} alt="figma" />
                </div>

                <div className="tech-card">
                    <img className="tech-card-img" src={github} alt="github" />
                </div>
           </div>
        </section>
    );
}

export default Cards;