import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <div className = "skills container-fluid d-flex justify-content-left">
                    <span className = "badge badge-pill badge-secondary">React.js</span>
                    <span className = "badge badge-pill badge-secondary">JavaScript</span>
                    <span className = "badge badge-pill badge-secondary">Bootstrap</span>
                </div>
            </div>
        );
    }
}

export default Skills;