import React, {useState} from 'react'
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projects] = useState([
    {
      name: 'projects',
      description: 'My Portfolio of various web development projects to showcase'
    }
  ])
  const [projectImages, setProjectImages] = useState(projects)

  return (
    <div className="App">
      <header className="App-header">
        <Nav
         projects={projects}
         setprojectImages={setProjectImages}
         contactSelected={contactSelected}
         setContactSelected={setContactSelected}
        ></Nav>
      </header>
      <main>
      {!contactSelected ? (
      <>
       <Project projectImages={projectImages}></Project>
       <Resume></Resume>
      </>
      ) : (
      <ContactForm></ContactForm>
      )}
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
