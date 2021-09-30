import React, { Component } from 'react'
import "./hoverComponents.css"
import { Animated } from 'react-animated-css'
class HoverComponents extends Component {
    render() {
        return (
            <div className="container bg-light hoverComponent ">
                <Animated animationIn="fadeInUp" animationInDuration ={500} className="ContentOnHover">
                    <div  className="d-flex justify-content-between align-items-center ">
                        <div className="d-flex flex-column justify-content-center align-items-center p-2">
                            <h4 className="mb-0 pb-0">App 1</h4>
                            <p className="text-secondary mt-0 pt-0">App</p>
                        </div>
                        <div className="d-flex">
                            <a><i className="fas fa-plus fa-lg mx-2"/></a>
                            <i className="fas fa-link fa-lg mx-2"></i>
                        </div>
                    </div>
                </Animated>
                
            </div>
        )
    }
}

export default HoverComponents
