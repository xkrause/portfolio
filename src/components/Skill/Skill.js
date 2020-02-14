import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
        return (
            <div className = "skill btn btn-info">
                {this.props.skill}
            </div>
        );
    }
}

export default Skill;