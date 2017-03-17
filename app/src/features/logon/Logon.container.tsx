import * as React from "react";
import LogonForm from "./LogonForm.component";
import "./styles";
import {Navigation} from "react-router-dom";
import {RouteInfo} from "react-router-dom";
import {Dispatch} from "redux";
import {logon} from "../../commons/actions/auth.actions";
import {connect} from "react-redux";
import {IApplication, Application} from "../../commons/models/Application.model";
import {UserContext} from "../../commons/models/UserContext.model";


export interface ILogonProps {
    navigation: Navigation;
    userContext: UserContext;
    logon: (credentials: {email: string, password: string}) => any;
}

class LogonComponent extends React.Component<ILogonProps & React.ClassAttributes<LogonComponent>, void> {
    constructor(props: ILogonProps) {
        super(props);
        this.handleLogon = this.handleLogon.bind(this);
    }

    handleLogon(values: {email: string, password: string}) {
        console.log('here value = ', values);
        this.props.logon(values);
        // this.props.navigation.push('/dash');
    }

    render() {
        const {
            userContext
        } = this.props;
        return (
            <div className="login-dark">
                <LogonForm onSubmit={this.handleLogon} userContext={userContext}/>
            </div>
        )
    }
}
;

const LogonRoute = (routeInfo: RouteInfo) => {
    const {
        history
    } = routeInfo;
    console.log('history=', history);
    const mapStateToProps = (state: Application, ownerProps: {navigation: Navigation}) => ({
        navigation: ownerProps.navigation,
        userContext: state.userContext
    });
    const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
        logon: (credentials: {email: string, password: string}) => dispatch(logon(credentials))
    });

    const Container = connect(mapStateToProps, mapDispatchToProps)(LogonComponent);
    return (
        <Container navigation={history}/>
    );
};


export default LogonRoute;