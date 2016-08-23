import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import Form from './Form';

export default class InviteButton extends Component {

    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {

        return (
            <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
                <Dialog
                    title="Request an Invite"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <Form />

                </Dialog>
            </div>
        );
    }
}