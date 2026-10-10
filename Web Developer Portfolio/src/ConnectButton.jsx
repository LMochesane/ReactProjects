// const button = document.getElementById("contactMe");
// const dropdown = document.getElementById("dropdown-content");

// button.addEventListener("click", () => {
//     dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
// });

// document.addEventListener("click", (event) => {
//     if (!dropdown.contains(event.target) && event.target !== button){
//         dropdown.style.display = "none";
//     }
// });



function ConnectButton() {
    return(
        <section>
          <div className="dropdown">
              <button className="contactMe">Contact Me</button>
            </div>
          <div id="dropdown-content" className="dropdown-content">
             <a href="mailto:kmochesane65@gmail.com">Email</a>
             <a href="https://www.linkedin.com/in/Mochesane">LinkedIn</a>
          </div>
        </section>
    )
}


export default ConnectButton