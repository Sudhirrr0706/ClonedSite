import React, { Component } from 'react'
import ServiceCards from './ServiceCards'
import './services.css'
class Services extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="servicesSection mb-0 ">

                    <div className="py-lg-5 py-3"> 
                        <div className="ServiceHead pb-0">
                            <span className="serviceShadow">Services</span>
                            <h2 className="serviceTitle">Services</h2>
                        </div>
                        <p className="serviceDescription pt-0">Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                    </div>

                    <div className="container">
                        <div className="d-flex flex-wrap py-lg-5 py-3">

                            <div className="col-lg-4  col-12">
                                <ServiceCards  cardLogo="fas fa-basketball-ball fa-2x cardLogo" cardTitle="Lorem Ipsum" CardDescribe="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
                            </div>

                            <div className="col-lg-4  col-12">
                                <ServiceCards  cardLogo="far fa-file-alt fa-2x cardLogo" cardTitle="Sed ut perspiciatis" CardDescribe="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
                            </div>

                            <div className="col-lg-4  col-12">
                                <ServiceCards  cardLogo="fas fa-tachometer-alt fa-2x cardLogo" cardTitle="Magni Dolores" CardDescribe="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>
                            </div>

                            <div className="col-lg-4 col-12 mt-lg-4">
                                <ServiceCards  cardLogo="fas fa-globe-americas fa-2x cardLogo" cardTitle="Nemo Enim" CardDescribe="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>
                            </div>

                            <div className="col-lg-4 col-12 mt-lg-4">
                                <ServiceCards  cardLogo="fab fa-slideshare fa-2x cardLogo" cardTitle="Dele cardo" CardDescribe="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"/>
                            </div>

                            <div className="col-lg-4 col-12 mt-lg-4">
                                <ServiceCards  cardLogo="fas fa-archway fa-2x cardLogo" cardTitle="Divera don" CardDescribe="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"/>
                            </div>

                        </div>
                    </div>
                   

               </div>
            </React.Fragment>
        )
    }
}

export default Services
