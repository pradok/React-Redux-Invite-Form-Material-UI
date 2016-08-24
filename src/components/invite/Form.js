import React, {Component} from 'react';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import AlertContainer from 'react-alert';

import {sendInvite} from './actions/index';

class Form extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            labelSendButton: 'Send'
        });
    }

    componentWillUnmount() {
        this.setState({
            labelSendButton: 'Send'
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            labelSendButton: 'Send'
        });
        if (nextProps.invite.error) {
            this.setState({
                canSubmit: true
            });

            this.showAlert(nextProps.invite.error);
        }

    }

    state = {
        canSubmit: false,
        submitPostWait: false
    };

    errorMessages = {
        nameError: 'Please only use letters',
        emailError: 'Please specify valid email address',
        emailConfirmError: 'Please confirm email',
        lengthError: 'Please provide more than 3 characters'
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
        this.setState({
            canSubmit: false
        });
        this.setState({
            labelSendButton: 'Please wait...'
        });

        delete data.emailConfirm;
        this.props.sendInvite(data);
    };

    notifyFormError = (data) => {
        console.error('Form error:', data);
    };

    showAlert = (msg = 'Unknown error from server') => {
        this.msg.show(msg, {
            type: 'error',
            time: 3000,
            transition: 'fade'
        });
    };


    render() {

        let {nameError, emailError, lengthError, emailConfirmError} = this.errorMessages;

        return (
            <div>

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
                        style={{width: '100%'}}
                    />
                    <FormsyText
                        name="email"
                        validations="isEmail"
                        validationError={emailError}
                        required
                        floatingLabelText="Email"
                        style={{width: '100%'}}
                    />
                    <FormsyText
                        name="emailConfirm"
                        validations="equalsField:email"
                        validationError={emailConfirmError}
                        required
                        floatingLabelText="Confirm email"
                        style={{width: '100%'}}
                    />

                    <RaisedButton
                        type="submit"
                        label={this.state.labelSendButton}
                        disabled={!this.state.canSubmit}
                        style={{width: '100%', marginTop: '50px'}}
                    />
                </Formsy.Form>

                <AlertContainer ref={a => this.msg = a} />

            </div>
        );
    }
}

export default connect(
    (state) => {
        return {invite: state.invite};
    }
    , {sendInvite})(Form);