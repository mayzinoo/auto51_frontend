import "@fortawesome/fontawesome-free/js/all"
import { Fragment } from "react";
import { Row } from 'reactstrap';

const Statistics = (props) => {
    return (
        <div className="container">
        {props.proposition === true ?
            <div className="valueprop-whole">
                <div className="text-center"><i className={props.icon} aria-hidden="true"></i></div>
                <Row className="">
                    <span className="valueprop-listing-num">{props.listingnum}</span>
                    <h3 className="valueprop-title">{props.title}</h3>
                    <div className="valueprop-text">{props.text}</div>
                </Row>
            </div>
        :
            <div className="stats-whole">
                <div className="text-center"><i className={props.icon} aria-hidden="true"></i></div>
                <Row>
                    <span className="stats-num">{props.stats}</span>
                    <div className="capitalize stats-name">{props.name}</div>
                </Row>
            </div>            
        }
        </div>
    )
}

export default Statistics;