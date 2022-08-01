import React from "react";

function Resume() {
    

    return (
        <section>
            <h1 id="resume">Resume</h1>
            <div className="my-2">

                <a data-testid="link" href="/">Download my Resume</a>

                <h2>Front-end Profeciencies:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h2>Back-end Profeciencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>

            </div>
        </section>
    )
}

export default Resume;