import React from "react";
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {LoginThunk})(LoginContainer);