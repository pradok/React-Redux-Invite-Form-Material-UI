import React from 'react';
import {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    Broccoli & CO
                </header>
                <main>
                    <h2>A better way to enjoy every day</h2>
                    <p>Be the first to know when we launch</p>
                    <RaisedButton label="Default" />
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
