import React, { Component } from 'react'
import './cards.css'
class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-3 col-12  mt-lg-0 mt-2 cards-bg">            
                    <div className=" px-3 py-2">
                        <i className={this.props.iconName} id="iconStyle"></i>
                        <p className="cardsHead">{this.props.cardName}</p>
                        <p className="description">{this.props.description}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Cards
