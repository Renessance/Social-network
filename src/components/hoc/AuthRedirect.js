import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/Login"}/>

            return <Component {...this.props} />;
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent);
}