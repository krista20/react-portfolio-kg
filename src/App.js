import React, {useState} from 'react'
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  // uses state to get the page
  const [ currentPage, setCurrentPage ] = useState()

function pageChanger(page) {
  if(page === "About") {
    return <About/> 
  }
  if(page === "Portfolio") {
    return <Portfolio/>
  }
  if(page === "Resume") {
    return <Resume/>
  }
  if(page === "Contact") {
    return <ContactForm/>
  }
}
  return (
    <div className="App">
      <Header 
      setCurrentPage={setCurrentPage}
      className="App-header"/>
     {pageChanger(currentPage)}
      <Footer/>
      
      <main>
      {/* {!contactSelected ? (
      <>
       <Project projectImages={projectImages}></Project>
       <Resume></Resume>
      </>
      ) : (
      <ContactForm></ContactForm>
      )} */}
     
      </main>
    </div>
  );
}

export default App;
