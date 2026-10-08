import Header from "./Header.jsx"
import Cards from "./Cards.jsx"
import SnippetBand from "./Snippet.jsx"
import Footer from "./Footer.jsx"
import ConnectButton from "./ConnectButton.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"


function App() {
   return(
    <>
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
    
    <Header/>
    <SnippetBand/>
    <AboutMe/>
    <Cards/>
    <Projects/>
    <ConnectButton/>
    <Footer/>
    </div>
    </>
   );
}



export default App
