import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className = "card">
                <div className = "overflow">
                    <img src = {this.props.image} alt = "" className = "card-img-top" />
                </div>
                <div className = "card-body text-dark">
                    <h5 className = "card-title">{this.props.title}</h5>
                    <p className = "card-text-text-secondary">{this.props.text}</p>
                    <a href = "#" className = "btn btn-outline-primary">A Button</a>
                </div>
            </div>
        );
    }
}

export default Card;