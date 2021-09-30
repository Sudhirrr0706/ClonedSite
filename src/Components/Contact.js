import React, { Component } from 'react'
import "./contact.css"
class Contact extends Component {
    render() {
        return (
           <React.Fragment>
               <div   className="contactHeader">
                   <span className="contactShadow">CONTACT</span>
                   <h2 className="contactHead">CONTACT</h2>
                   <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

               <div className="my-3">
                <div className="container">
                        <div className="d-flex flex-wrap justify-content-around">
                            {/* Contact Details */}
                            <div className="contactSection col-lg-5 col-12 p-4 mb-0 pb-0">
                                <div className="d-flex">
                                    <i className="fas fa-map-marker-alt fa-1x my-auto contactLogo p-3"></i>
                                    <div className="mx-3 contactDetails"> 
                                        <h3 className="my-auto">Location:</h3>
                                        <p className="my-auto">A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="d-flex my-4">
                                    <i className="far fa-envelope fa-1x my-auto contactLogo p-3"></i>
                                    <div className="mx-3 contactDetails"> 
                                        <h3 className="my-auto">Email:</h3>
                                        <p className="my-auto">info@example.com</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <i className="fas fa-mobile fa-1x my-auto contactLogo p-3"></i>
                                    <div className="mx-3 contactDetails"> 
                                        <h3 className="my-auto">Call:</h3>
                                        <p className="my-auto">+1 5589 55488 55s</p>
                                    </div>
                                </div>
                                <iframe
                                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                   className="locationMap  mt-5"frameborder="0" allowfullscreen=""/>
                            </div>

                            {/* Contact Forms */}
                            <div className=" ContactForm col-lg-6 col-12  mt-lg-0 mt-5 p-4 pb-0">
                              
                                <form className="d-flex flex-wrap p-4">
                                    <div className="col-lg-6 col-12 p-2">
                                        <label for="inputEmail4" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="col-lg-6 col-12 p-2">
                                        <label for="inputPassword4" className="form-label">Your Mail</label>
                                        <input type="mail" className="form-control" id="inputPassword4"/>
                                    </div>
                                    <div className="col-12 p-2">
                                        <label for="inputAddress" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="inputAddress" />
                                    </div>

                                    <div className="form-group mt-3 col-12 p-2">
                                        <label for="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" required=""></textarea>
                                    </div>

                                    <div className="col-12 submitButton my-3 p-2">
                                        <button type="submit" className="btn btn-outline-secondary px-5">Send Message</button>
                                    </div>
                                    </form>
                                
                            </div>

                        </div>
                </div>
               </div>
           </React.Fragment>
           
        )
    }
}

export default Contact
