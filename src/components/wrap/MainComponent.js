import React, { Component } from 'react';
import Section1Component from './Main/Section1Component';
import Section2Component from './Main/Section2Component';
import Section3Component from './Main/Section3Component';
import Section4Component from './Main/Section4Component';
import Section5Component from './Main/Section5Component';





class MainComponent extends Component {
    render() {
        return (
            <main id="main">
                <Section1Component />
                <Section2Component />
                <Section3Component />
                <Section4Component />
                <Section5Component />

            </main>
        );
    }
}

export default MainComponent;