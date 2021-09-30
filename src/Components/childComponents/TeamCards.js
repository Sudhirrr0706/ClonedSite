import React, { Component } from 'react'
import "./teamCards.css"
class TeamCards extends Component {
    render() {
        const{teamPic,teamMemberName, TeamDesignation, teamAbout}=this.props
        return (
            <React.Fragment>
                <div className="teamSections">
                    <div className="teamCard ">
                        <img className="teamImage p-4" src={teamPic} alt=""/>
                        <h3 className="teamName">{teamMemberName}</h3>
                        <h4 className="teamDesignation">{TeamDesignation}</h4>
                        <p className="px-2">{teamAbout}</p>
                        <div className="d-flex justify-content-center socialMedia pb-3">
                            <i className="mediaLogo fab fa-twitter fa-lg mx-2"></i>
                            <i className="mediaLogo fab fa-facebook fa-lg mx-2"></i>
                            <i className="mediaLogo fab fa-instagram fa-lg mx-2"></i>
                            <i className="mediaLogo fab fa-linkedin fa-lg mx-2"></i>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TeamCards
