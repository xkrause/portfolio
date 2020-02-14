import React from 'react';
import Skill from '../Skill/Skill';
import './Skills.css';

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skill_1: "React.js",
            skill_2: "Bootstrap",
            skill_3: "Javascript",
            skill_4: "HTML",
            skill_5: "CSS",
            filter_1: "reactjs",
            filter_2: "bootstrap",
            filter_3: "javascript",
            filter_4: "html",
            filter_5: "css"
        }
    }

    render() {
        return (
            <div className = "container">
                <Skill skill = {this.state.skill_1} filter = {this.state.filter_1} />
                <Skill skill = {this.state.skill_2} filter = {this.state.filter_2} />
                <Skill skill = {this.state.skill_3} filter = {this.state.filter_3} />
                <Skill skill = {this.state.skill_4} filter = {this.state.filter_4} />
                <Skill skill = {this.state.skill_5} filter = {this.state.filter_5} />
            </div>
        );
    }
}

export default Skills;