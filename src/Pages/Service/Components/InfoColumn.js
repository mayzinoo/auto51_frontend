//component
// import Statistics from "../../../Components/Statistics";
import { Card, CardBody, CardTitle } from 'reactstrap';
//css
import './styles/infocolumn.css'
const InfoColumn = (props) => {
    return (
        <div className={props.columnClass}>
            <Card className={props.className} style={{padding: "0 20px"}}>
                <CardTitle className="info-card-title">{props.title}</CardTitle>
                <div className="info-hover"></div>
                <CardBody>
                    {props.children}
                </CardBody>
            </Card>
        </div>
    )
}

export default InfoColumn;