import React from 'react';
import './Projects.css';
import Pic from "../../img/yellow-and-black-striped-3662579.jpg";
import Card from '../Card/Card';
import Skill from '../Skill/Skill';

const projects = [
    {
        "id": "1",
        "title": "Jamming",
        "image": Pic,
        "text": "This connects to the Spotify API, a Codecademy Project"
    },
    {
        "id": "2",
        "title": "Ravenous",
        "image": Pic,
        "text": "This connects to the Yelp API, a Codecademy Project"
    },
    {
        "id": "3",
        "title": "Odin's Vault",
        "image": Pic,
        "text": "Comic book db, to be built"
    }
];

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects,

            skill_1: "All",
            skill_2: "React.js",
            skill_3: "Bootstrap",
            skill_4: "JavaScript",
            skill_5: "HTML",
            skill_6: "CSS"
        };

        this.onShowAll = this.onShowAll.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onShowReact = this.onShowReact.bind(this);
    }

    onShowAll = () => {
        this.setState({projects});
    }

    onShowReact = () => {
        console.log("I'm here");
        this.setState({projects: [{"id": "1", 
                                    "title": "Jamming", 
                                    "image": Pic, 
                                    "text": "This connects to the Spotify API, a Codecademy Project"
                                },
                                {
                                    "id": "2", 
                                    "title": "Ravenous", 
                                    "image": Pic, 
                                    "text": "This connects to the Yelp API, a Codecademy Project"
                                }
                            ]
                        });
    }

    render() {
        return (
            <div>
                <div className = "container-fluid d-flex justify-content-left">
                    <Skill skill = {this.state.skill_1} onClick = {this.onShowAll} />
                    <Skill skill = {this.state.skill_2} onClick = {this.onShowReact} />
                    <Skill skill = {this.state.skill_3} />
                    <Skill skill = {this.state.skill_4} />
                    <Skill skill = {this.state.skill_5} />
                    <Skill skill = {this.state.skill_6} />
                </div>
                <div className = "container-fluid d-flex justify-content-center">
                    {
                        this.state.projects.map(project => {
                            return <Card key = {project.id}
                                        title = {project.title}
                                        image = {Pic}
                                        text = {project.text} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;