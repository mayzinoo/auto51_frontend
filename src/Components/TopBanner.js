import React from "react";
import './topbanner.css';

const TopBanner = (props) => {
    return (
        <div className="top-banner-container"> {/** background img */}
            <div className="top-banner-background"> {/** shade */}
            <div className = 'container'>
                <span className="top-banner-title"> {/** text */}
                    {props.title}
                </span>
            </div>
            </div>
        </div>
    )
}

export default TopBanner;