import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        // projects = [],
        // setProjectImages,
        // ProjectImages,
        navImage,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/navphoto/krista-picture.jpg`)}
                        alt={navImage}
                        className="img-thumbnail mx-1"
                        key={navImage}
                    />
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* about me */}
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    {/* portfolio */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Portfolio</span>
                    </li>
                    {/* Resume */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Resume</span>
                    </li>
                    {/* Contact */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

