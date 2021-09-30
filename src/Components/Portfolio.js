import React, { Component } from 'react'
import All from './childComponents/All'
import AppPortfolio from './childComponents/AppPortfolio'
import CardsPortfolio from './childComponents/CardsPortfolio'
import WebPortfolio from './childComponents/WebPortfolio'
import "./portfolio.css"
class Portfolio extends Component {
    state={

        AllComponent:true,
        AppComponent:false,
        CardComponent:false,
        WebComponent:false,
        AllStyleName:"mx-3 renderedLinkColor",
        AppStyle:"mx-3 link",
        CardStyle:"mx-3 link",
        webStyle:"mx-3 link"

    }

    // All portfolio image rendering

    allComponent=()=>{
        this.setState({
            
        AllComponent:true,
        AppComponent:false,
        CardComponent:false,
        WebComponent:false,
        AllStyleName:"mx-3 renderedLinkColor",
        AppStyle:"mx-3 link",
        CardStyle:"mx-3 link",
        webStyle:"mx-3 link"
       

        })
    }

    // App Portfolio components
    appComponent=()=>{

        this.setState({
            AllComponent:false,
            AppComponent:true,
            CardComponent:false,
            WebComponent:false,
            AllStyleName:"mx-3 link",
            AppStyle:"mx-3 renderedLinkColor",
            CardStyle:"mx-3 link",
            webStyle:"mx-3 link",

        })

    }

    // Card Portfolio Components

    cardComponent=()=>{

        this.setState({
            AllComponent:false,
            AppComponent:false,
            CardComponent:true,
            WebComponent:false,
            AllStyleName:"mx-3 link",
            AppStyle:"mx-3 link",
            CardStyle:"mx-3 renderedLinkColor",
            webStyle:"mx-3 link"

        })

    }

    webComponent=()=>{

        this.setState({
            AllComponent:false,
            AppComponent:false,
            CardComponent:false,
            WebComponent:true,
            AllStyleName:"mx-3 link",
            AppStyle:"mx-3 link",
            CardStyle:"mx-3 link",
            webStyle:"mx-3 renderedLinkColor"

        })

    }

    render() {
        let portfolioRendering

        if(this.state.AllComponent){

            portfolioRendering=<All />

        }
        else if(this.state.AppComponent){

          portfolioRendering=<AppPortfolio />

        }
        else if(this.state.CardComponent){
            portfolioRendering=<CardsPortfolio />
        }
        else if(this.state.WebComponent){
            portfolioRendering=<WebPortfolio />
        }
        else{
            portfolioRendering=<All />
        }
        return (
          <React.Fragment>
              <div className="portfolioSection">

                    <div className="portfolioHead">
                        <span className="shadows">PORTFOLIO</span>
                        <h2 className="portHead">PORTFOLIO</h2>
                        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className={this.state.AllStyleName} onClick={this.allComponent}>ALL</p>
                        <p className={this.state.AppStyle} onClick={this.appComponent}>APP</p>
                        <p className={this.state.CardStyle} onClick={this.cardComponent}>CARD</p>
                        <p className={this.state.webStyle} onClick={this.webComponent}>WEB</p>
                    </div>

                    <div>
                        {portfolioRendering}
                    </div>


              </div>
          </React.Fragment>
        )
    }
}

export default Portfolio
