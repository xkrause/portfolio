import React from 'react';
import './Card.css';
import ProjectModal from '../ProjectModal/ProjectModal';

class Card extends React.Component {
    render() {
        return (
    <       div className = "card">
                <div className = "overflow">
                    <img src = {this.props.image} alt = "" className = "card-img-top" />
                </div>
                <div className = "card-body text-dark">
                    <h5 className = "card-title">{this.props.title}</h5>
                    <p className = "card-text-text-secondary">{this.props.text}</p>
                    <ProjectModal />
                </div>
            </div>
        );
    }
}

export default Card;