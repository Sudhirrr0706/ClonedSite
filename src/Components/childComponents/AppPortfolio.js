import React, { Component } from 'react'
import { Animated } from 'react-animated-css'
import './appPortfolio.css'
class AppPortfolio extends Component {
    state={
        portImage1:"portfolio-1.jpg",
        portImage2:"portfolio-2.jpg",
        portfolioImage6:"portfolio-6.jpg",
    }
    render() {
        return (
           <React.Fragment>

               <div className="container">
                    <div className="d-flex flex-wrap justify-content-center">

                        <div className="col-lg-4 col-md-10 p-3">
                            <img className="appPortfolio " src={this.state.portImage1} alt=""/>
                        </div>

                        <Animated animationIn="slideInRight" className="col-lg-4 col-md-10 p-3">
                            <img className="appPortfolio " src={this.state.portfolioImage6} alt=""/>
                        </Animated>

                        <Animated animationIn="slideInLeft" className="col-lg-4 col-md-10 p-3">
                            <img className="appPortfolio " src={this.state.portImage2} alt=""/>
                        </Animated>

                    </div>
               </div>

           </React.Fragment>
        )
    }
}

export default AppPortfolio
