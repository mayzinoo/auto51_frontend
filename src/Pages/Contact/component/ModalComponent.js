
import { Modal, Row, Col, Container } from 'react-bootstrap';
import '../style/Modal.css';
function ModalComponent(props) {
    return (
        
        <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Call Sales Using a Local Numbers
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <h2 className = 'state-name'>Americas</h2>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>US and Canada</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Brazil</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Chile</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                        </Row>
                        <Row>
                        <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Colombia</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Mexico</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <h2 className = 'state-name'>Europe</h2>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>US and Canada</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Brazil</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Chile</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                        </Row>
                        <Row>
                        <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Colombia</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Mexico</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <h2 className = 'state-name'>Asia Pecific</h2>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>US and Canada</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Brazil</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Chile</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                        </Row>
                        <Row>
                        <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Colombia</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                                <a className = 'number' href='/'>+1 888 413 1296 (Spanish)</a>
                            </Col>
                            <Col md = {4} sm = {6} className = 'num-col'>
                                <h3 className = 'country-name'>Mexico</h3>
                                <a className = 'number' href='/'>+1 888 413 1296 (English)</a>
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className = 'modal-close' onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
    )
}

export default ModalComponent
