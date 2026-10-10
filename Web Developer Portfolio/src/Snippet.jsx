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
                <p> Engineering clear, user-focused web interfaces.</p>

                <p>Every line of code is a chance to shape user experience - I focus on making the experience seamless, efficient and reliable.</p>
            </div>
        </section>
    )
}

export default SnippetBand
