import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Portfolio(props) {
    const { projectImages } = props;

    return (
        <section>
            <h1 data-testid="h1tag">{projectImages}</h1>
            <h1>Portfolio</h1>
            <div className="container row">

                <Container className="">
                {/* 1. anibite project */}
                <h2>Anibite:</h2>
                <img 
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/anibite-page.png`)}
                    alt="anibite"
                    className="img-thumbnail row"
                    style={{width:"30%"}}
                />
              

                
                {/* 2. horiseon project */}
                <h2>Horiseon:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/horiseon-img.jpg`)}
                    alt="horiseon"
                    className="img-thumbnail row"
                    style={{width:"30%"}}
                />
                </Container>
                
                <div>
                {/* 3. run-buddy project */}
                <h2>Run-Buddy:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/run-buddy-img.jpg`)}
                    alt="horiseon"
                    className="img-thumbnail"
                    style={{width:"30%"}}
                />
                </div>

                <div>
                 {/* 4. sanchez-autodetailing project */}
                 <h2>Sanchez Auto Detailing:</h2>
                 <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/sanchez-autodetailing.png`)}
                    alt="horiseon"
                    className="img-thumbnail"
                    style={{width:"30%"}}
                />
                </div>

                {/* 5. work day scheduler */}
                <div>
                <h2>Work Day Scheduler:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/work-day-scheduler.png`)}
                    alt="horiseon"
                    className="img-thumbnail"
                    style={{width:"30%"}}
                />
                </div>

                {/* 6. pwa budget tracker */}
                <div>
                <h2>PWA Budget Tracker:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/pwa-budget-tracker.png`)}
                    alt="horiseon"
                    className="img-thumbnail"
                    style={{width:"30%"}}
                />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;