import React from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function Portfolio(props) {
    const { projectImages } = props;

    return (
        <section className="container">
            <h1 data-testid="h1tag">{projectImages}</h1>
            <h1>Portfolio</h1>
            <div className="container row">


                {/* 7. Ever After Bakery */}
                <a href="https://ever-after-bakery.herokuapp.com/" rel="github" className="link pe-auto">
                    <h2 className="text-center">Ever After Bakery:</h2>
                </a>
                <div className="container d-inline-flex justify-content-center">
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/photos/everAfterBakery.png`)}
                        alt="ever-after-bakery"
                        className="img-thumbnail"
                        style={{ width: "75%" }}
                    />
                </div>


<div className="text-center"> Anibite</div>
                <div className="d-inline-flex justify-content-center flex-wrap">
                    
                    
                        {/* 1. anibite project */}
                       
                        <img
                            //src assignd required expression | incremental naming of the imgs using i
                            // default property --> is where the img has been saved. To render img, default property must be invoked  
                            src={require(`../../assets/photos/anibite-page.png`)}
                            alt="anibite"
                            className="img-thumbnail"
                            style={{ width: "60%" }}
                        />
                     </div>


                     <div className="text-center"> Horiseon:</div>
                    <div className="d-inline-flex justify-content-center flex-wrap">
                        {/* 2. horiseon project */}  
                        <img
                            //src assignd required expression | incremental naming of the imgs using i
                            // default property --> is where the img has been saved. To render img, default property must be invoked  
                            src={require(`../../assets/photos/horiseon-img.jpg`)}
                            alt="horiseon"
                            className="img-thumbnail"
                            style={{ width: "60%" }}
                        />
                    </div>
               

                    <div className="text-center">Run-Buddy:</div>
                    <div className="d-inline-flex justify-content-center flex-wrap">
                    {/* 3. run-buddy project */}
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/photos/run-buddy-img.jpg`)}
                        alt="run-buddy"
                        className="img-thumbnail"
                        style={{ width: "60%" }}
                    />
                </div>

                <div className="text-center">Sanchez Auto Detailing:</div>
                    <div className="d-inline-flex justify-content-center flex-wrap">
                    {/* 4. sanchez-autodetailing project */}
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/photos/sanchez-autodetailing.png`)}
                        alt="sanchez-auto-detailing"
                        className="img-thumbnail"
                        style={{ width: "60%" }}
                    />
                </div>

                {/* 5. work day scheduler */}
                <div className="text-center">Work Day Scheduler:</div>
                    <div className="d-inline-flex justify-content-center flex-wrap">
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/photos/work-day-scheduler.png`)}
                        alt="work-day-scheduler"
                        className="img-thumbnail"
                        style={{ width: "60%" }}
                    />
                </div>

                {/* 6. pwa budget tracker */}
                <div className="text-center">PWA Budget Tracker:</div>
                    <div className="d-inline-flex justify-content-center flex-wrap">
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/photos/pwa-budget-tracker.png`)}
                        alt="pwa-budget-tracker"
                        className="img-thumbnail"
                        style={{ width: "60%" }}
                    />
                </div>

            </div>
        </section>
    );
}

export default Portfolio;