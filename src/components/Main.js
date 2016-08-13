require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    Header
                </header>
                <main>
                    <p>Form here</p>
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
