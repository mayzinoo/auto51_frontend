import React from 'react'
import './styles/Listcard.css'
import { Card } from 'react-bootstrap';
import { FaTachometerAlt, FaRegRegistered, FaCog, FaCar, FaArrowCircleRight } from 'react-icons/fa';

function Listcard(props) {
    return (
        <Card key={props.key} >
            <div className='list-item'>
                <div className='list-img-Frame'>
                    <div className = 'list-vehicleImg' style={{background: `url(${props.src})`}}></div>
                </div>
                <h4 className='list-vehicle-title'>
                    <a href={props.href} >
                        {props.hrefValue}
                    </a>
                </h4>
                <p className="list-vehicle-pricing">
                    <span className="list-vehicle-price">
                        <b></b>
                        {props.spanPcdprice}
                    </span>
                    <span className="list-vehicle-price-msrp">{props.spanPcdpriceMsrp}</span>
                </p>
                <div className='list-vehicle-description'>
                    <p>{props.pValue}</p>
                </div>
                <div className="list-vehicle-specs">
                    <span><i><FaRegRegistered style={{ paddingRight: 3, fontSize: 17 }} /> {props.spanRegistration}</i></span>
                    <span><i><FaCog style={{ paddingRight: 3, fontSize: 17 }} /> {props.spanMilage}</i></span>
                    <span><i><FaTachometerAlt style={{ paddingRight: 3, fontSize: 17 }} /> {props.spanTrasmission}</i></span>
                </div>
                <div class="list-vehicle-btn">
                    <span class="btn_detail_compare">
                        <FaCar style = {{paddingRight:'3px',fontSize:'15px'}}/>
                        Add to Compare
                    </span>
                    <a href="http://autoshowroom.co/inventory/chevrolet-camaro-2018/">
                        <FaArrowCircleRight style = {{paddingRight:'3px',fontSize:'15px'}}/>
                        View More
                    </a>
                </div>
            </div>
        </Card>
    )
}

export default Listcard;