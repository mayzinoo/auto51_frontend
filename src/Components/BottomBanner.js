import React from "react";
import './bottombanner.css';
const BottomBanner = (props) => {
    return (
        <div className='bottom-contact-footer'>
            <div className='bottom-contact-overlay'>
                <div className='container'>
                    <div className='bottom-contact-content'>
                        <span className='bottom-contact-message'>
                            <p>
                                {props.logo} {props.text}
                            </p>
                        </span>
                        <a className='bottom-contact-btn' href='/contact'>
                            Contact Us 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBanner;