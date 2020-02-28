import React from 'react';
import './Projects.css';
import Pic from "../../img/yellow-and-black-striped-3662579.jpg";
import Code from '../../img/code.png';
import Review from '../../img/review.png';
import StreetMission from '../../img/streetmission.png';
import Ticket from '../../img/ticket.png';
import Card from '../Card/Card';
import Skill from '../Skill/Skill';

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
                    image: Code,
                    text: "This connects to the Spotify API, a Codecademy Project",
                    modalHeader: "Jammming",
                    modalText: "This project was built using React.js to connect to a Spotify account using the Spotify API. Users can create playlists, search for songs to add to the playlists, and add them to Spotify."
                },
                project2: {
                    title: "Ticketing System",
                    image: Ticket,
                    text: "This was a ticketing system made for Green River College",
                    modalHeader: "Ticketing System",
                    modalText: "This was a school project where my team built a ticketing system using PHP, jQuery, HTML, and CSS."
                },
                project3: {
                    title: "Auburn City Street Mission",
                    image: StreetMission,
                    text: "Website for homeless outreach organization",
                    modalHeader: "Auburn City Street Mission",
                    modalText: "This was a freelance project I made for a local homeless outreach organization. Built using Bootstrap."
                },
                project4: {
                    title: "ReviewMyResume",
                    image: Review,
                    text: "Resume-reviewing service made for local client",
                    modalHeader: "ReviewMyResume",
                    modalText: "This was a school project where my team built a website for a local resume-reviewing company. Users can choose a purchase plan and upload their resume to be reviewed."
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
            <div className = "projects">
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
                                modalHeader = {this.state.projects.project1.modalHeader}
                                modalText = {this.state.projects.project1.modalText} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project2.title} 
                                image = {this.state.projects.project2.image} 
                                text = {this.state.projects.project2.text} 
                                modalHeader = {this.state.projects.project2.modalHeader}
                                modalText = {this.state.projects.project2.modalText} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project3.title} 
                                image = {this.state.projects.project3.image} 
                                text = {this.state.projects.project3.text} 
                                modalHeader = {this.state.projects.project3.modalHeader}
                                modalText = {this.state.projects.project3.modalText} />
                    </div>
                    <div className = "col-lg-3 col-md-3">
                        <Card title = {this.state.projects.project4.title} 
                                image = {this.state.projects.project4.image} 
                                text = {this.state.projects.project4.text}
                                modalHeader = {this.state.projects.project4.modalHeader}
                                modalText = {this.state.projects.project4.modalText} />
                    </div>
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
            </div>
        );
    }
}

export default Projects;