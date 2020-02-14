import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
        return (
            <div className = "skill btn btn-info filter-button" data-filter = {this.props.filter}>
                {this.props.skill}
            </div>
        );
    }
}

export default Skill;