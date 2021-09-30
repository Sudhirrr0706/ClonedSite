import React, { Component } from 'react'
import {Animated} from "react-animated-css";
import HoverComponents from './HoverComponents';
import './all.css'
class All extends Component {
    state={
        portImage1:"portfolio-1.jpg",
        portImage2:"portfolio-2.jpg",
        portfolioImage3:"portfolio-3.jpg",
        portfolioImage4:"portfolio-4.jpg",
        portfolioImage5:"portfolio-5.jpg",
        portfolioImage6:"portfolio-6.jpg",
        portfolioImage7:"portfolio-7.jpg",
        portfolioImage8:"portfolio-8.jpg",
        portfolioImage9:"portfolio-9.jpg",
        isVisible:false
    }
 
    render() {
        let hoverEffect
            if(this.state.isVisible){
                hoverEffect=<HoverComponents />
            }
        
        return (
            <React.Fragment>

                <div className="container">
                    <Animated animationIn="zoomIn" animationOut="zoomOut"  className="d-flex flex-wrap justify-content-center">  

                        <div className="col-lg-4 col-md-10 col-12 p-3">
                            <img className="portfolioImage1 mb-lg-4 mb-4" src={this.state.portImage1} alt=""/>
                           
                            <img onMouseEnter={()=>this.setState({isVisible:true})} onMouseLeave={()=> this.setState({isVisible:false})}  className="portfolioImage2" src={this.state.portImage2} alt="" />
                            {/* {hoverEffect} */}
                            
                        </div>
                

                        <div className="col-lg-4 col-md-10 col-12 p-3" on>
                            <img className="portfolioImage3 mb-lg-0" src={this.state.portfolioImage3} alt=""/>
                            <img className="portfolioImage4 my-lg-4 my-4" src={this.state.portfolioImage4} alt=""/>
                            <img className="portfolioImage5" src={this.state.portfolioImage5} alt=""/>
                        </div>

                        <div className="col-lg-4 col-md-10 col-12 p-3">
                            <img className="portfolioImage6 mb-4" src={this.state.portfolioImage6} alt=""/>
                            <img className="portfolioImage7 mb-4" src={this.state.portfolioImage7} alt=""/>
                            <img className="portfolioImage8 mb-4" src={this.state.portfolioImage8} alt=""/>
                            <img className="portfolioImage9" src={this.state.portfolioImage9} alt=""/>
                        </div>

                    </Animated>
                </div>

            </React.Fragment>
        )
    }
}

export default All
