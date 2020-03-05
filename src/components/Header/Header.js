import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className = "header">
                <h3 className = "name">Xander Krause</h3>
                <p className = "titles">Developer, Gamer, Jedi</p>
            </div>
        );
    }
}

export default Header;