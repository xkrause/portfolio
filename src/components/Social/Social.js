import React from 'react';
import './Social.css';
import {Button, Modal} from 'react-bootstrap';

class Social extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal = () => {
        this.setState({show: true});
    }

    closeModal = () => {
        this.setState({show: false});
    }

    render() {
        return (
            <div classname = "container">
                <div className = "row">
                    <Button className = "btn btn-success social" onClick = {this.showModal}>Let's Connect</Button>
                    <Modal show = {this.state.show}>
                        <Modal.Header closeButton onClick = {this.closeModal}>Social Links</Modal.Header>
                        <Modal.Body><p>Xander Krause</p>
                            <a href = "https://www.linkedin.com/in/xanderkrause" target = "_blank">LinkedIn</a>
                            <br></br>
                            <a href = "https://github.com/xkrause" target = "_blank">GitHub</a>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick = {this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Social;