import React, { Component } from 'react'
import Carousel from './childComponents/Carousel'
import "./testimonial.css"
class Testimonial extends Component {
    render() {
        return (
           <React.Fragment>
               <div>
                <div className="TestimonialSection">
                    <div className="pt-5 pb-0 mb-0">
                        <span className="shadows">TESTIMONIAL</span>
                        <h3 className="testimonialHead">TESTIMONIAL</h3>
                        <p className="mt-0 pt-0 testimonialDescription">Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                    </div>
                    <Carousel />
                </div>

                <div className="testimonialFoot py-5">
                    <div className="container py-3">
                        <h3>Call To Action</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className="btn btn-outline-secondary px-5 mt-2 py-2">Call To Action</button>
                    </div>
                </div>

               </div>
           </React.Fragment>
        )
    }
}

export default Testimonial
