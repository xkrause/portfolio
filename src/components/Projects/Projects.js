import React from 'react';
import './Projects.css';
import Pic from "../../img/yellow-and-black-striped-3662579.jpg";
import Card from '../Card/Card';
import Skill from '../Skill/Skill';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
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
            ]
        };

        /*this.onShowAll = this.onShowAll.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onShowReact = this.onShowReact.bind(this);*/
    }

    /*onShowAll = () => {
        this.setState({projects});
    };

    onClear = () => {
        this.setState({projects: []});
    };

    onShowReact = () => {
        this.setState({projects: [this.state.projects.project1]});
    };*/

    render() {
        return (
            <div>
                <div className = "container-fluid d-flex justify-content-center">
                    {
                        this.state.projects.map(project => {
                            return <Card title = {project.title}
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