import React, { Component } from 'react'
import './hero.css'
class Hero extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="container">
                    <div className="d-flex flex-wrap-reverse justify-content-between hero-section">

                        <div className="col-lg-5 col-12 d-flex flex-column justify-content-center mt-lg-0 mt-5"> 
                            <h1>Elegant and creative solutions</h1>
                            <h2 className="py-3">We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex">
                                <button className="btn btn-outline-secondary customHeroButton px-lg-5 px-3">Get started</button>
                                <div className="d-flex align-items-center px-3">
                                    <i className="far fa-play-circle fa-2x customLogoStyle"/>
                                    <p className="px-2 my-auto customLogo">Watch Video</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <img className="customHeroImage p-3" src="../hero-img.png" alt=""/>
                        </div>
                    </div>
                    
                </div>
           </React.Fragment>
        )
    }
}

export default Hero
