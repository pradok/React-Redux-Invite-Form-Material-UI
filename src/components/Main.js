require('normalize.css/normalize.css');
require('styles/App.scss');
require("muicss/lib/sass/mui.scss");

import React from 'react';
import Button from 'muicss/lib/react/button';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    Broccoli & CO
                </header>
                <main>
                    <h2>A better way to enjoy every day</h2>
                    <p>Be the first to know when we launch</p>
                    <Button color="primary">Request an Invite</Button>
                </main>
                <footer>
                    <em>Made with love in Melbourne<br/>
                        &copy; {new Date().getFullYear()} Broccoli & Co. All right reserved
                    </em>
                </footer>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
