import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Bio</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </div>
        );
    }
}

export default Nav;