import React, { Component } from 'react'
import CountUp ,{startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './about.css'
class About extends Component {
    state={

        didViewCountUp:false

    }
    

    onVisibilityChange=(isVisible)=>{

        if(isVisible){
           this.setState({didViewCountUp:true})
        }

    }
   


    render() {
       
    
      
        
        return (
         <React.Fragment>
             <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <img className="aboutImage p-3" src="../about.png" alt=""/>
                    </div>

                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
                        <h2 className="aboutHead">Voluptatem dignissimos provident quasi corporis voluptates</h2>
                        <p className="aboutDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle my-auto"></i>
                            <p className="my-auto ms-2 checkListDescription"> Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>

                        <div className="d-flex my-4">
                            <i className="far fa-check-circle fa-lg checkListStyle my-auto"></i>
                            <p className="my-auto ms-2 checkListDescription"> Duis aute irure dolor in reprehenderit in voluptate velit</p>
                        </div>

                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-1"></i>
                            <p className=" ms-2 checkListDescription"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda</p>
                        </div>

                        <p className="aboutFoot">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        
                    </div>

                </div>

                <div className="d-flex flex-wrap justify-content-center align-items-center my-5">

                    <div className="col-lg-3 col-6 countSection">

                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}}  delayedCall>
                            <CountUp className="CountStyle"  start="50" end={this.state.didViewCountUp ? 232:null} duration={1} /> 
                        </VisibilitySensor>
                        
                        <h3 className="countName">Client</h3>

                    </div>

                    <div className="col-lg-3 col-6 countSection">

                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:50}}  delayedCall>
                            <CountUp className="CountStyle" startOnMount={false} start="90" end={this.state.didViewCountUp ? 521:null} duration={1} /> 
                        </VisibilitySensor>
                        
                        <h3 className="countName">Projects</h3>

                    </div>

                    <div className="col-lg-3 col-6 countSection mt-lg-0 mt-3">

                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:50}}  delayedCall>
                            <CountUp className="CountStyle" startOnMount={false} start="90" end={this.state.didViewCountUp ? 1463:null} duration={1} /> 
                        </VisibilitySensor>
                        
                        <h3 className="countName">Hours of support</h3>

                    </div>

                    <div className="col-lg-3 col-6 countSection mt-lg-0 mt-3">

                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:50}}  delayedCall>
                            <CountUp id="lastCount" className="CountStyle" startOnMount={false} start="1" end={this.state.didViewCountUp ? 15:null} duration={1} /> 
                        </VisibilitySensor>
                        
                        <h3 className="countName">Hard Workers</h3>

                    </div>


                </div>
             </div>
         </React.Fragment>
        )
    }
}

export default About
