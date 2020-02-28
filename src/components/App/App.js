import React from 'react';
import './App.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <Skills />
                <Bio />
                <Projects />
            </div>
        );
    }
}

export default App;