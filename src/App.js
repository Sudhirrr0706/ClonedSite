import React, { Component } from 'react'
import './App.css';
import About from './Components/About';
import Cards from './Components/Cards';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Portfolio from './Components/Portfolio';
import { Scrolltop } from './Components/Scrolltop';
import Services from './Components/Services';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';

class App extends Component {

  render() {
  
    return (
      <React.Fragment>

        <header >
          <Nav />
        </header>

        <section>
          
          {/* Hero Section */}
          <div id="homeSection">
            <Hero />
          </div>
          
          
          <div className="container-fluid container-sm mt-lg-0 mt-3 cardsIndex">
            <div className="d-flex flex-wrap justify-content-between">

              <Cards 
                iconName="fas fa-laptop fa-2x my-2" 
                cardName="Lorem Ipsum" 
                description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident">
              </Cards>

              <Cards 
                iconName="fas fa-tasks fa-2x my-2" 
                cardName="Dolor Sitema" 
                description="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata">
              </Cards>

              <Cards 
                iconName="fas fa-file-signature fa-2x my-2" 
                cardName="Sed ut perspiciatis" 
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu">
              </Cards>
            
            </div>
          </div>
        
          <div className="pt-5" id="aboutSection">
            <About />
          </div>
          <div className="pt-5" id="serviceSection">
            <Services />
          </div>

          <div className="pt-5" id="portfolioSection">
            <Portfolio />
          </div>

          <div className="pt-5">
            <Testimonial />
          </div>

          <div className="pt-5" id="teamSection">
            <Team />
          </div>

          <div  id="contactSection" className="pt-5">
            <Contact />
          </div>
        </section>

        <footer>
          <Footer />
        </footer>

        <Scrolltop />
      </React.Fragment>
    )
  }
}

export default App



