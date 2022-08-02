import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
    console.log(props)
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pe-auto">
            <div>
                <ul className="nav container-fluid mx-5">
                    {/* Name & click to route to main page */}
                    <a href="/" rel="mainpage" style={{textDecoration: "none"}}>
                    <h1 id="name" className="text-white">Krista Garcia</h1>
                    </a>
                
                    {/* about me */}
                    <li className="nav-item mx-5">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("About")
                        }}>About</span>
                    </li>
                    {/* portfolio */}
                    <li className="nav-item mx-5">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("Portfolio")
                        }}>Portfolio</span>
                    </li>
                    {/* Resume */}
                    <li className="nav-item mx-5">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("Resume")
                        }}>Resume</span>
                    </li>
                    {/* Contact */}
                    <li className="nav-item mx-5">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("Contact")
                        }}>Contact</span>
                    </li>

                </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

