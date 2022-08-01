import React from "react";


function Portfolio(props) {
    const { projectImages } = props;

    return (
        <section>
            <h1 data-testid="h1tag">{projectImages}</h1>
            <h1>Portfolio</h1>
            <div>
                {/* 1. anibite project */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/anibite-page.png`)}
                    alt="anibite"
                    className="img-thumbnail mx-1"
                />
                {/* 2. horiseon project */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/horiseon-img.jpg`)}
                    alt="horiseon"
                    className="img-thumbnail mx-1"
                />
                {/* 3. run-buddy project */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/run-buddy-img.jpg`)}
                    alt="horiseon"
                    className="img-thumbnail mx-1"
                />
                 {/* 4. sanchez-autodetailing project */}
                 <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/sanchez-autodetailing.png`)}
                    alt="horiseon"
                    className="img-thumbnail mx-1"
                />
                {/* 5. work day scheduler */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/work-day-scheduler.png`)}
                    alt="horiseon"
                    className="img-thumbnail mx-1"
                />
                {/* 6. pwa budget tracker */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/photos/pwa-budget-tracker.png`)}
                    alt="horiseon"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Portfolio;