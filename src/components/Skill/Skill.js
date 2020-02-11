import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
        return (
            <div className = "container">
                <span className = "badge badge-pill badge-secondary">{this.props.skill}</span>
            </div>
        );
    }
}

export default Skill;