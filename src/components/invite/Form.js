import React, {Component} from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';

import { sendInvite } from './actions/index';

class Form extends Component {

    state = {
        canSubmit: false
    };

    errorMessages = {
        nameError: 'Please only use letters',
        emailError: 'Please specify valid email address',
        emailConfirmError: 'Please confirm email',
        lengthError: 'Please provide more than 3 characters'
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
        delete data.emailConfirm;
        this.props.sendInvite(data);
    };

    notifyFormError = (data) => {
        console.error('Form error:', data);
    };


    render() {

        let {submitStyle} = this.styles;
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
                        style ={{width: '100%'}}
                    />
                    <FormsyText
                        name="email"
                        validations="isEmail"
                        validationError={emailError}
                        required
                        floatingLabelText="Email"
                        style ={{width: '100%'}}
                    />
                    <FormsyText
                        name="emailConfirm"
                        validations="equalsField:email"
                        validationError={emailConfirmError}
                        required
                        floatingLabelText="Confirm email"
                        style ={{width: '100%'}}
                    />

                    <RaisedButton
                        style={submitStyle}
                        type="submit"
                        label="Send"
                        disabled={!this.state.canSubmit}
                        style ={{width: '100%', marginTop:'50px'}}
                    />
                </Formsy.Form>

            </div>
        );
    }
}

export default connect(null, { sendInvite })(Form);