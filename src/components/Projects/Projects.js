import React from 'react';
import './Projects.css';
import Pic from "../../img/yellow-and-black-striped-3662579.jpg";
import Card from '../Card/Card';
import Skill from '../Skill/Skill';
import ProjectModal from '../ProjectModal/ProjectModal';

/*const projects = [
    {
        "id": "1",
        "title": "Jammming",
        "image": Pic,
        "text": "This connects to the Spotify API, a Codecademy Project"
    },
    {
        "id": "2",
        "title": "Ticketing System",
        "image": Pic,
        "text": "Ticketing System designed for Green River College"
    },
    {
        "id": "3",
        "title": "Auburn City Street Mission",
        "image": Pic,
        "text": "Website for homeless outreach ministry"
    },
    {
        "id": "4",
        "title": "ReviewMyResume",
        "image": Pic,
        "text": "Resume-reviewing service with different purchase plans"
    }
];*/

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //projects,

            projects: {
                project1: {
                    title: "Jammming",
                    image: Pic,
                    text: "This connects to the Spotify API, a Codecademy Project"
                },
                project2: {
                    title: "Ticketing System",
                    image: Pic,
                    text: "This was a ticketing system made for Green River College"
                },
                project3: {
                    title: "Auburn City Street Mission",
                    image: Pic,
                    text: "Website for homeless outreach organization"
                },
                project4: {
                    title: "ReviewMyResume",
                    image: Pic,
                    text: "Resume-reviewing service with different purchase plans"
                }
            },

            skill_1: "All",
            skill_2: "React.js",
            skill_3: "Bootstrap",
            skill_4: "JavaScript",
            skill_5: "HTML/CSS",
            skill_6: "School Projects",
            skill_7: "Photoshop",
        };

        /*this.onShowAll = this.onShowAll.bind(this);
        this.onShowReact = this.onShowReact.bind(this);
        this.onShowBootstrap = this.onShowBootstrap.bind(this);
        this.onShowSchoolProjects = this.onShowSchoolProjects.bind(this);*/
    }

    /*onShowAll = () => {
        this.setState({projects});
    }

    onShowReact = () => {
        this.setState({projects: [{
                "id": "1", 
                "title": "Jamming", 
                "image": Pic, 
                "text": "This connects to the Spotify API, a Codecademy Project"
            }
        ]});
    }

    onShowBootstrap = () => {
        this.setState({projects: [{
                "id": "3",
                "title": "ReviewMyResume",
                "image": Pic,
                "text": "Resume-reviewing service"
            },
            {
                "id": "6",
                "title": "Auburn City Street Mission",
                "image": Pic,
                "text": "Homeless Outreach Ministry"
            }
        ]});
    }

    onShowSchoolProjects = () => {
        this.setState({projects: [{
                "id": "1",
                "title": "ReviewMyResume",
                "image": Pic,
                "text": "Resume-reviewing service"
            }
        ]});
    }*/

    render() {
        return (
            <div>
                {/*<div className = "container-fluid d-flex">
                    {
                        this.state.projects.map(project => {
                            return <Card key = {project.id}
                                            title = {project.title}
                                            image = {Pic}
                                            text = {project.text} />
                        })
                    }
                </div>*/}
                <div className = "row">
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project1.title} 
                                image = {this.state.projects.project1.image} 
                                text = {this.state.projects.project1.text} 
                                onClick = {this.showModal} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project2.title} 
                                image = {this.state.projects.project2.image} 
                                text = {this.state.projects.project2.text} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project3.title} 
                                image = {this.state.projects.project3.image} 
                                text = {this.state.projects.project3.text} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project4.title} 
                                image = {this.state.projects.project4.image} 
                                text = {this.state.projects.project4.text} />
                    </div>
                </div>
                <div className = "container-fluid d-flex justify-content-left">
                    <span className = "badge badge-pill badge-secondary">React.js</span>
                    <span className = "badge badge-pill badge-secondary">JavaScript</span>
                    <span className = "badge badge-pill badge-secondary">Bootstrap</span>
                    <span className = "badge badge-pill badge-secondary">HTML/CSS</span>
                </div>
                {/*<div className = "col-lg-10">
                    <Skill skill = {this.state.skill_1} onClick = {this.onShowAll} />
                    <Skill skill = {this.state.skill_2} onClick = {this.onShowReact} />
                    <Skill skill = {this.state.skill_3} onClick = {this.onShowBootstrap} />
                    <Skill skill = {this.state.skill_4} />
                    <Skill skill = {this.state.skill_5} onClick = {this.onShowSchoolProjects} />
                    <Skill skill = {this.state.skill_6} />
                    <Skill skill = {this.state.skill_7} />
                </div>*/}

                <div className = "container-fluid d-flex justify-content-left">
                    <ProjectModal />
                </div>
            </div>
        );
    }
}

export default Projects;