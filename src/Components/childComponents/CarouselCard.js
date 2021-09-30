import React, { Component } from 'react'
import "./carouselCard.css"
class CarouselCard extends Component {
    render() {
        const{image,contents,CardName,designation}=this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div>
                            <p className="carouselCard px-5 py-5">

                                <i className="fas fa-quote-left fa-lg px-2 quote"></i>
                                    {contents}
                                 <i className="fas fa-quote-right fa-lg px-2 quote"></i>

                            </p>
                    </div>
                    <div className="imageSection">
                        <img className="carouselCardsImages col-2" src={image} alt=""/>
                        <h3>{CardName}</h3>
                        <h4>{designation}</h4>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CarouselCard
