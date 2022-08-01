import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
    console.log(props)
    return (
        <header className="">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <ul className="nav container-fluid">
                
                    {/* about me */}
                    <li className="nav-item">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("About")
                        }}>About</span>
                    </li>
                    {/* portfolio */}
                    <li className="nav-item">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("Portfolio")
                        }}>Portfolio</span>
                    </li>
                    {/* Resume */}
                    <li className="nav-item">
                        <span className="btn nav-link active text-white" style={{border:"none"}} onClick={() => {
                            props.setCurrentPage("Resume")
                        }}>Resume</span>
                    </li>
                    {/* Contact */}
                    <li className="nav-item">
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

