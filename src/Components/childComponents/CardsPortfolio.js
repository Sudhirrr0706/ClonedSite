import React, { Component } from 'react'
import { Animated } from 'react-animated-css'
import "./CardsPortfolio.css"
class CardsPortfolio extends Component {
    state={
        portfolioImage7:"portfolio-7.jpg",
        portfolioImage8:"portfolio-8.jpg",
        portfolioImage9:"portfolio-9.jpg",
    }
    render() {
        return (
            <React.Fragment>

                <div className="Container">
                    <Animated animationIn="zoomIn" animationOut="zoomOut" className="d-flex flex-wrap justify-content-center">

                        <div className="col-lg-4 col-md-10 col-12 p-3">
                            <img className="cardsImages" src={this.state.portfolioImage7} alt="" />
                        </div>

                        <div className="col-lg-4 col-md-10 col-12 p-3">
                            <img className="cardsImages" src={this.state.portfolioImage8} alt="" />
                        </div>

                        <div className="col-lg-4 col-md-10 col-12 p-3">
                            <img className="cardsImages" src={this.state.portfolioImage9} alt="" />
                        </div>

                    </Animated>
                </div>

            </React.Fragment>
        )
    }
}

export default CardsPortfolio
