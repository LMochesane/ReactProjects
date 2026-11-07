import meHeadShot from './assets/meHeadShot.jpg';

function SnippetBand () {
    return(
        <section className="snippet-band">

            <div className="snippet-image">
                <img
                    className="snippet-img"
                    src={meHeadShot}
                    alt="Relebohile Mochesane"
                />
            </div>

            <div className="snippet-text">
                <h1>Hello! I'm Relebohile Mochesane.</h1>
                <p>Software Developer | Building thoughtful, user-focused digital solutions.</p>

                <p>I take interest in turning ideas into funtional software. My approach centres on writing clean, maintainable code and
                    developing solutions that are intuitive, efficient, and reliable.</p>
            </div>
        </section>
    )
}

export default SnippetBand
