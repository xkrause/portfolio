import React from 'react';
import './Bio.css';

class Bio extends React.Component {
    render() {
        return (
            <div className = "container">
                <h2>About Me</h2>
                <p>Xander is a React.js developer from Auburn, Washington. He has five years experience 
                    working as a freelance web developer using HTML/CSS and Bootstrap, and has been developing in React since 
                    last May. Xander has worked on projects including a resume-reviewing service, pre-launch startup work, and 
                    web design for a homeless outreach organization in Auburn. In his spare time, Xander loves pop-culture, 
                    movies, comic books, and composing music.</p>

                    <p>Xander holds a Bachelor's degree in Software and Mobile Applications Development from Green River College.</p>
            </div>
        );
    }
}

export default Bio;