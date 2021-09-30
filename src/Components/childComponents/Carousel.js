import React, { Component } from 'react'
import CarouselCard from './CarouselCard'
import "./Carousel.css"
class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active footCarousel" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                    </div>

                    <div className="container carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active"  data-bs-interval="2000">
                            <div className="d-flex align-items-center justify-content-center pt-3">
                                <div className=" col-lg-6 col-12">
                                    <CarouselCard
                                        image="../testimonials-1.jpg"
                                        contents=" Proin iaculis purus consequat sem cure digni ssim donec 
                                                porttitora entum suscipit rhoncus.
                                                Accusantium quam, ultricies eget id, aliquam eget nibh et.
                                                Maecen aliquam, risus at semper."
                                        CardName="Saul Goodman"
                                        designation="Ceo &amp; Founder"
                                    />            
                                </div>
                                
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-flex  align-items-center justify-content-center pt-3">
                                <div className="col-lg-6 col-12">
                                    <CarouselCard 
                                        image="../testimonials-2.jpg"
                                        contents="Export tempor illum tamen malis malis eram quae irure esse labore quem
                                                cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster 
                                                fugiat irure amet legam anim culpa."
                                        CardName="Sara Wilsson"
                                        designation="Designer"
                                    />
                                </div>

                                

                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-flex  align-items-center justify-content-center pt-3">
                                <div className=" col-lg-6 col-12">
                                    <CarouselCard 
                                        image="../testimonials-3.jpg"
                                        contents=" Enim nisi quem export duis labore cillum quae magna enim sint
                                                    quorum nulla quem veniam duis minim tempor labore quem
                                                    eram duis noster aute amet eram fore quis sint minim."
                                        CardName="Jena Karlis"
                                        designation="Store Owner"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-flex  align-items-center justify-content-center pt-3">
                            <div className=" col-lg-6 col-12">
                                    <CarouselCard 
                                        image="../testimonials-4.jpg"
                                        contents=" Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim 
                                                    fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                                                     quem dolore labore illum veniam."
                                        CardName="Matt Brandon"
                                        designation="Freelancer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-flex  align-items-center justify-content-center pt-3">
                            <div className=" col-lg-6 col-12">
                                    <CarouselCard 
                                        image="../testimonials-5.jpg"
                                        contents="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                                                    enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse 
                                                     veniam culpa fore nisi cillum quid."
                                        CardName="John Larson"
                                        designation="Entrepreneur"
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

export default Carousel
