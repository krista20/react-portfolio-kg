import React from "react";

function About() {

    return (
      
        <section>
            <div className="my-2">

                <h2>About Me</h2>
              
                
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/navphoto/krista-picture.jpg`)}
                        alt="selfPicture"
                        className="img-thumbnail mx-1"
                    />

                    <p>Hello there! Welcome to my portfolio website!</p>
                    <p>I am a Graphic Designer and I recently started my web development journey through the UCLA Learning Bootcamp.
                        I am excited to apply what I have learned so far and to integrate that with my design background.
                        Cheers to always learning and expanding your mind!
                    </p>
                
                </div>
                </section>
                )}

export default About;     

   