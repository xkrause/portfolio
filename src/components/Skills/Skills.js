import React from 'react';
import Skill from '../Skill/Skill';
import './Skills.css';

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skill_1: "React.js",
            skill_2: "Bootstrap",
            skill_3: "HTML",
            skill_4: "CSS",
            skill_5: "Javascript"
        }
    }
    render() {
        return (
            <div className = "container">
                <Skill skill = {this.state.skill_1} />
                <Skill skill = {this.state.skill_2} />
                <Skill skill = {this.state.skill_3} />
                <Skill skill = {this.state.skill_4} />
                <Skill skill = {this.state.skill_5} />
            </div>
        );
    }
}

export default Skills;