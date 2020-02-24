import React from 'react';
import './ProjectModal.css';
import {Button, Modal} from 'react-bootstrap';

class ProjectModal extends React.Component {
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
            <div>
                <Button onClick = {this.showModal}>Details</Button>
                <Modal show = {this.state.show}>
                    <Modal.Header closeButton onClick = {this.closeModal}>{this.props.modalHeader}</Modal.Header>
                    <Modal.Body>{this.props.modalText}</Modal.Body>
                    <Modal.Footer>
                        <Button onClick = {this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ProjectModal;