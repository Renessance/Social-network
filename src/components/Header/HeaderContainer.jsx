import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk, setAuthUserPhoto} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        photos: state.profilePage.profile.photos

    }
}

export default connect(mapStateToProps, {setAuthUserPhoto, logoutThunk})(HeaderContainer);
