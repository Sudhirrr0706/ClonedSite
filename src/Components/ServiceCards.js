import React, { Component } from 'react'
import './serviceCards.css'
class ServiceCards extends Component {
    render() {
        const{cardLogo,cardTitle,CardDescribe}=this.props
        return (
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center  serviceCardsHead p-4 py-5 mx-3 mt-lg-0 mt-3">
                    <i className={cardLogo}></i>
                    <h3 className="my-3 cardTitle">{cardTitle}</h3>
                    <p className="cardDescription">{CardDescribe}</p>
                </div>
            </div>
        )
    }
}

export default ServiceCards
