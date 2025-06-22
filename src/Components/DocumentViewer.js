import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Dropdown } from 'react-bootstrap';
import { Table, Button } from 'reactstrap';
import './documentviewer.css'
const DocumentViewer = (props) => {
    const [showFile, setShowFile] = useState(false);
    const [imageID, setImageID] = useState('0')
    // const [imageSrc, setImageSrc] = useState('0')

    const handleShowFile = (e) => {
        setShowFile(true);
        setImageID(e.target.id);

    }
    const handleCloseFile = () => {
        setShowFile(false);
    };

    const files = props.data

    return (
        <Fragment>

            {files.map((file, index) => {
                return (
                    <td key={`docview-${index}`} width='200'>
                        <span style={{ display: 'inline-block', marginLeft: '15px', marginRight: '10px' }}>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    View
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleShowFile} id={index}>{file.name}</Dropdown.Item>
                                    <Dropdown.Item href="#/form/quotation">Quotation</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        {props.delete === true ?
                            <span style={{ display: 'inline-block' }}>
                                <Button variant="info" className="cartButton">Delete</Button>
                            </span> : <td></td>}
                    </td>
                )
            })}

            {files.length > 0 ?
                <Modal show={showFile} dialogClassName="documentViewerModal">
                    <Modal.Header closeButton onClick={handleCloseFile}>
                        <Modal.Title style={{ overflowWrap: "anywhere" }}>{files[imageID].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {files[imageID].type === "image" ?
                            <img src={files[imageID].src} width="100%" /> /** affected by file name text length */
                            :
                            files[imageID].type === "pdf" ?
                                // <object style="padding: 20px;">
                                //     <embed src={files[imageID].src} width="600px" height="600px"/> 
                                // </object>
                                <iframe src={files[imageID].src} width="100%" height="500px" frameborder="0">
                                    <p>
                                        <a href={files[imageID].src}>
                                            Fallback link for browsers that don't support iframes
                                        </a>
                                    </p>
                                </iframe>
                                :
                                ""
                        }

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFile}>
                            Exit
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                ""}
        </Fragment>
    )
}

export default DocumentViewer;
