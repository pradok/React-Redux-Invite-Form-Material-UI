import React, {Component} from 'react';

import Invite from 'components/invite/Invite';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    Broccoli & CO
                </header>
                <main>
                    <h2>A better way to enjoy every day </h2>
                    <p>Be the first to know when we launch</p>
                    <Invite />
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
