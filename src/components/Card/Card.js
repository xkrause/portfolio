import React from 'react';
import './Card.css';
import {Button} from 'react-bootstrap';

class Card extends React.Component {
    render() {
        return (
            <div>
    <           div className = "card">
                    <div className = "overflow">
                        <img src = {this.props.image} alt = "" className = "card-img-top" />
                    </div>
                    <div className = "card-body text-dark">
                        <h5 className = "card-title">{this.props.title}</h5>
                        <p className = "card-text-text-secondary">{this.props.text}</p>
                        <Button type = "button" href = "#" className = "btn btn-primary" onClick = {this.props.onClick}>A Button</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;