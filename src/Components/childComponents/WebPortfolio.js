import React, { Component } from 'react'
import { Animated } from 'react-animated-css'
import './webPortfolio.css'
class WebPortfolio extends Component {
    state={
        portfolioImage3:"portfolio-3.jpg",
        portfolioImage4:"portfolio-4.jpg",
        portfolioImage5:"portfolio-5.jpg",
    }
    render() {
        return (
          <React.Fragment>
              <div className="container">
                <Animated animationIn="zoomIn" animationOut="zoomOut" className="d-flex flex-wrap justify-content-center">

                    <div className="col-lg-4 col-md-10 col-12 p-3">
                        <img className="webImages" src={this.state.portfolioImage3} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-10 col-12 p-3">
                        <img className="webImages" src={this.state.portfolioImage4} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-10 col-12 p-3">
                        <img className="webImages" src={this.state.portfolioImage5} alt="" />
                    </div>

                </Animated>
              </div>
          </React.Fragment>
        )
    }
}

export default WebPortfolio
