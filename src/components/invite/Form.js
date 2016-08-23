import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Formsy from 'formsy-react';
import {
    FormsyText
} from 'formsy-material-ui/lib';

export default class Form extends Component {

    state = {
        canSubmit: false,
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    errorMessages = {
        nameError: 'Please only use letters',
        emailError: 'Please specify valid email address',
        emailConfirmError: 'Please confirm email',
        lengthError: 'You can not type in less than 3 characters'
    };

    styles = {
        submitStyle: {
            marginTop: 32
        }
    };

    enableButton = () => {
        this.setState({
            canSubmit: true
        });
    };

    disableButton = () => {
        this.setState({
            canSubmit: false
        });
    };

    submitForm = (data) => {
        alert(JSON.stringify(data, null, 4));
    };

    notifyFormError = (data) => {
        console.error('Form error:', data);
    };


    render() {

        let {submitStyle } = this.styles;
        let { nameError, emailError, lengthError, emailConfirmError } = this.errorMessages;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                disabled={!this.state.canSubmit}
            />
        ];

        return (
            <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
                <Dialog
                    title="Dialog With Actions TT"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <Formsy.Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onValidSubmit={this.submitForm}
                        onInvalidSubmit={this.notifyFormError}
                    >
                        <FormsyText
                            name="name"
                            validations="isWords,minLength:3"
                            validationErrors={{isWords: nameError, minLength: lengthError}}
                            required
                            floatingLabelText="Full Name"
                        />
                        <FormsyText
                            name="email"
                            validations="isEmail"
                            validationError={emailError}
                            required
                            floatingLabelText="Email"
                        />
                        <FormsyText
                            name="emailConfirm"
                            validations="equalsField:email"
                            validationError={emailConfirmError}
                            required
                            floatingLabelText="Confirm email"
                        />

                        <RaisedButton
                            style={submitStyle}
                            type="submit"
                            label="Submit"
                            disabled={!this.state.canSubmit}
                        />
                    </Formsy.Form>

                </Dialog>
            </div>
        );
    }
}