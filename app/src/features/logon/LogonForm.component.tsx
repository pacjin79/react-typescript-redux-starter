import * as React from 'react';
import {reduxForm, Field, Form} from 'redux-form';
import {
    FormControl,
    Form as BootstrapForm,
    FormGroup,
    Button,
    Glyphicon,
    Label
} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {UserContext} from "../../commons/models/UserContext.model";


const TextInput = (props: any) => {
    const {
        input,
        meta,
        label,
        type,
        placeholder
    } = props;
    const {
        touched,
        error,
        warning
    } = meta;
    let vState: any = null;
    if (touched) {
        if (error) vState = 'error';
        if (warning) vState = 'warning';
    }
    return (
        <FormGroup validationState={vState}>
            <FormControl {...input} label={label} type={type} placeholder={placeholder}/>
            <FormControl.Feedback />
        </FormGroup>
    );
};

const required = (value: any) => (value) ? undefined : 'Required';

export interface ILogonFormProps {
    handleSubmit?: (values: any) => void;
    onSubmit: (values: any) => void;
    userContext: UserContext;

}

export class LogonFormComponent extends React.Component<ILogonFormProps & React.ClassAttributes<LogonFormComponent>, void> {
    constructor(props: ILogonFormProps) {
        super(props);
    }

    render() {
        const {
            handleSubmit,
            userContext
        } = this.props;
        let message:React.ReactNode;
        if(!userContext.isAuthenticated && userContext.authError){
            message = <Label bsStyle="danger">{userContext.authError.message}</Label>;
        }
        return (
            <BootstrapForm noValidate onSubmit={handleSubmit} horizontal>
                <div className="illustration">
                    <Glyphicon glyph="lock"/>
                    <h3>Start your Biologs!</h3>
                </div>
                <div>
                    {message}
                </div>
                <div>
                    <Field name="email" type="email" component={TextInput} placeholder="Email" validate={[
                        required
                    ]}/>
                </div>
                <div>
                    <Field name="password" type="password" component={TextInput} validate={[required]}
                           placeholder="Password"/>
                </div>
                <Button type="submit" bsStyle="primary" block>Sign in</Button>
            </BootstrapForm>
        )
    }
}


const logonForm = reduxForm({
    form: 'logonForm'
})(LogonFormComponent);

export default logonForm;
