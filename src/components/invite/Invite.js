import React, {Component} from 'react';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import Form from './Form';

require('./sass/inviteForm.scss');


class Invite extends Component {

    state = {
        openSuccessDialog: false,
        open: false
    };

    handleOpenInviteDialog = () => {
        this.setState({open: true});
    };

    handleCloseInviteDialog = () => {
        this.setState({open: false});
    };

    handleOpenSuccessDialog = () => {
        this.setState({openSuccessDialog: true});
    };

    handleCloseSuccessDialog = () => {
        this.setState({openSuccessDialog: false});
        this.setState({open: false});
        console.log('this.props', this.props);
    };

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        if(nextProps.invite.success) {
            this.handleCloseInviteDialog();
            this.handleOpenSuccessDialog();
        }
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps, 'nextState', nextState);
    }


    render() {
        return (
            <div>
                <RaisedButton label="Request an Invite" onTouchTap={this.handleOpenInviteDialog}/>
                <Dialog
                    title="Request an Invite"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleCloseInviteDialog}
                    autoScrollBodyContent={true}
                    className="dialog--invite-form"
                    titleStyle ={{textAlign: 'center'}}
                >
                    <Form />

                </Dialog>

                <Dialog
                    title="All Done!"
                    modal={false}
                    open={this.state.openSuccessDialog}
                    onRequestClose={this.handleCloseSuccessDialog}
                >
                    You will be one of the first to experience Brocolli & Co. when we launch.

                    <RaisedButton
                        label="OK"
                        onTouchTap={this.handleCloseSuccessDialog}
                        style={{width: '100%', marginTop: '50px'}}
                    />
                </Dialog>

            </div>
        );
    }
}

export default connect(
    (state) => {
        console.log('InviteButton state = ', state);
        return {invite: state.invite};
    }
    )(Invite);