//Libraries
import React from 'react'
import { Modal } from 'react-bootstrap';
import Cropper from 'react-easy-crop';
import {Button} from 'reactstrap';
//Components
import Input from '../Components/Inputfield';
//CSS
import '../Components/CropModal.css';

function CropModal(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.onHide} className="profile-crop-modal">
                <Modal.Header>
                    <Modal.Title>Crop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Cropper
                            image={props.image}
                            crop={props.crop}
                            zoom={props.zoom}
                            rotation={props.rotation}
                            aspect={3 / 3} /** crop grid area */
                            onCropChange={props.onCropChange}
                            onCropComplete={props.onCropComplete}
                        />
                    </div>
                    <div className="profile-crop-slider">
                        <Input header="Zoom" type="range" min={0.1} max={3} step={0.1} onChange={props.zoomSlider} value={props.zoom} />
                        <Input header="Rotation" type="range" min={0} max={360} step={1} onChange={props.rotationSlider} value={props.rotation} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={props.handleCompleteCrop}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CropModal;