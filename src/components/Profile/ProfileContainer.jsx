import React from 'react';
import style from "./profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersStatusThunk,
    getUsersThunk,
    savePhotoThunk,
    saveProfileThunk,
    setUsersStatusThunk
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }

        this.props.getUsersThunk(userId);
        this.props.getUsersStatusThunk(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div className={style.content}>
                <Profile isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         setStatus={this.props.setUsersStatusThunk}
                         savePhotoThunk={this.props.savePhotoThunk}
                         saveProfileThunk={this.props.saveProfileThunk}
                         errors={this.props.errors}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
   return {
       profile: state.profilePage.profile,
       status: state.profilePage.status,
       authorizedUserId: state.auth.id,
       isAuth: state.auth.isAuth,
       errors: state.profilePage.profile.errors,
   }
}


export default compose(
    connect(mapStateToProps, {getUsersThunk, getUsersStatusThunk, setUsersStatusThunk, savePhotoThunk, saveProfileThunk}),
    withRouter,
)(ProfileContainer);

