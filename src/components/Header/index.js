import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
   console.log(props)
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/navphoto/krista-picture.jpg`)}
                        alt="selfPicture"
                        className="img-thumbnail mx-1"
                    />
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* about me */}
                    <li className="mx-2">
                        {/* <a data-testid="about" href="#" onClick={ () =>{
                            props.setCurrentPage("About") }}>
                            About me
                        </a> */}
                        <span onClick={ () => {
                            props.setCurrentPage("About")}}>About</span>
                    </li>
                    {/* portfolio */}
                    <li className="mx-2">
                        <span onClick={ () => {
                            props.setCurrentPage("Portfolio")}}>Portfolio</span>
                    </li>
                    {/* Resume */}
                    <li className="mx-2">
                        <span onClick={ () => {
                            props.setCurrentPage("Resume")}}>Resume</span>
                    </li>
                    {/* Contact */}
                    <li className="mx-2">
                        <span onClick={ () => {
                            props.setCurrentPage("Contact")}}>Contact</span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;

