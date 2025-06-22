import React, { Fragment, useState } from 'react';
import './dropdown.css'
import Input from './Inputfield'
// import { Modal } from 'react-bootstrap';
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Card, CardBody
} from 'reactstrap';

const DropDownButtonItem = (props) => { //adding one more prop for function calling/onclick
    const [markup, setMarkup] = useState(0)

    function changeMarkup(e) {
        setMarkup(e.target.value)
    }
    if (props.type === 0) {
        return (<a href={props.link}><DropdownItem key={props.action === "approve" || props.action === "decline" ?
            props.action === "approve" ? `approve-${props.setkey}` : `decline-${props.setkey}`
            :
            props.action === "delete" ? `delete-${props.setkey}`
                :
                props.action === "cancel" ? `cancel-${props.setkey}`
                    :
                    props.action === "download" ? `download-${props.setkey}` : `action-${props.setkey}`} onClick={props.onClick}>
            <i className={`${props.icon} mr-1`}  style = {{color: props.color}}/>
            <span style={{paddingLeft:'10px',fontSize:'14px'}}> {props.name}</span>
        </DropdownItem></a>)
    } else if (props.type === 1) {
        return (<DropdownItem divider />);
    } else if (props.type === 2) {
        return (
            <Fragment>
                <Card>
                    <form>
                        <CardBody className="dropdownitem">
                            <Input key={`mkup-${props.setkey}`} id={`markup-${props.setkey}`} value={markup} type="text" icon="pe-7s-cash" onChange={changeMarkup}
                                header={[<i className={`${props.icon} mr-1`} />, props.name]} />
                            <Button onClick={props.function}>Add</Button>
                        </CardBody>
                    </form>
                </Card>
            </Fragment>)
    }
    // } else if(props.type === 3) {
    //     return (
    //         <Fragment>
    //         <button onClick={handleShowFile}>View document</button>
    //         <Modal show={showFile} dialogClassName="documentViewerModal">
    //             <Modal.Header closeButton>
    //                 <Modal.Title>{props.name}</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <img src={props.src} width="100%"/>
    //             </Modal.Body>
    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleCloseFile}>
    //                     Exit
    //                 </Button>
    //             </Modal.Footer>
    //         </Modal>
    //         </Fragment>
    //     )
    // }
}

const DropDownButton = (props) => {
    return (
        <UncontrolledButtonDropdown style={{ margin: '0px', opacity: props.opacity }} disabled = {props.disabled}>
            <DropdownToggle className="small" color="secondary" >
                <i className="fas fa-cog" /> {props.label}
            </DropdownToggle>
            <DropdownMenu>
                {props.buttons.map((btn, index) => {
                    return (<DropDownButtonItem {...btn} setkey={props.setkey} key={`btn-${props.setkey}-${index}`}/>)
                })}
            </DropdownMenu>
        </UncontrolledButtonDropdown>)
}

export default DropDownButton;