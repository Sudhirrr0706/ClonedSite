import React, { Component } from 'react'
import TeamCards from './childComponents/TeamCards'
import "./team.css"
class Team extends Component {
    render() {
        return (
         <React.Fragment>
             <div>
                <div className="teamSection pt-3">
                   <span className="teamShadow">TEAM</span>
                   <h2 className="teamHead mb-0 pb-0">TEAM</h2>  
                   <p className="mt-0 pt-0">Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                   <div className="container py-5">
                       <div  className="d-flex flex-wrap">
                            <div className="col-lg-4 col-12 p-2">
                                <TeamCards
                                     teamPic="../team-1.jpg" 
                                     teamMemberName="Walter White" 
                                     TeamDesignation="Chief Executive Officer" 
                                     teamAbout="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut" 
                                />
                            </div>
                            <div className="col-lg-4 col-12 p-2">
                                <TeamCards 
                                    teamPic="../team-2.jpg" 
                                    teamMemberName="Sarah Jhinson" 
                                    TeamDesignation="Product Manager" 
                                    teamAbout="Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus" 
                                />
                            </div>
                            <div className="col-lg-4 col-12 p-2">
                                <TeamCards
                                   
                                    teamPic="../team-3.jpg" 
                                    teamMemberName="William Anderson" 
                                    TeamDesignation="CTO" 
                                    teamAbout="Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara" 
                                />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
             
               
                
             </div>
         </React.Fragment>
        )
    }
}

export default Team
