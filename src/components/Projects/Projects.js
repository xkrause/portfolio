import React from 'react';
import './Projects.css';
import Pic from "../../img/yellow-and-black-striped-3662579.jpg";
import Card from '../Card/Card';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project1: {
                image: Pic,
                title: "Project 1",
                text: "This is my first project"
            },

            project2: {
                image: Pic,
                title: "Project 2",
                text: "This is my second project"
            },

            project3: {
                image: Pic,
                title: "Project 3",
                text: "This is my third project"
            }
        }
    }

    render() {
        return (
            <div className = "container-fluid d-flex justify-content-center">
                <div className = "row">
                    <div className = "col-md-4">
                        <Card image = {this.state.project1.image} title = {this.state.project1.title} text = {this.state.project1.text} />
                    </div>
                    <div className = "col-md-4">
                        <Card image = {this.state.project2.image} title = {this.state.project2.title} text = {this.state.project2.text} />
                    </div>
                    <div className = "col-md-4">
                        <Card image = {this.state.project3.image} title = {this.state.project3.title} text = {this.state.project3.text} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;