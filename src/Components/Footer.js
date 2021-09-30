import React, { Component } from 'react'
import "./footer.css"
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footerSection pt-5">
                    <div className='footerContent pt-5'>
                        <h2 className="pb-5">eNno</h2>
                        <p className="col-lg-5 mx-auto">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        <div className="Subscription d-flex justify-content-center">
                            <input id="mailInput" className="col-lg-5 col-10 py-4 ps-3" type="email" placeholder="Enter Your Email" />
                            <button className="btn btn-outline-secondary py-lg-2 px-lg-4 ">Subscribe</button>
                        </div>
                        <div className="py-2 d-flex justify-content-center">
                            <i className="footerLogos fab fa-twitter-square fa-2x p-2"></i>
                            <i className="footerLogos fab fa-facebook-square fa-2x p-2"></i>
                            <i className="footerLogos fab fa-instagram-square fa-2x p-2"></i>
                            <i className="footerLogos fab fa-skype fa-2x p-2"></i>
                            <i className="footerLogos fab fa-linkedin fa-2x p-2"></i>
                        </div>
                        <hr className="col-10 mx-auto"/>
                        <div className="col-10 d-flex justify-content-between mx-auto py-3">
                            <p className="copyrightSection">© Copyright <strong>eNno</strong>. All Rights Reserved</p>
                            <p>Designed by <span className="Copyrights">BootstrapMade</span></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
           
        )
    }
}

export default Footer
