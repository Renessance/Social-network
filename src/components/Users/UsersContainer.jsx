import React from 'react';
import {connect} from "react-redux";
import {
    getUsersThunk,
    setFollowThunk,
    setUnFollowThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isProgress ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                setFollowThunk={this.props.setFollowThunk}
                setUnFollowThunk={this.props.setUnFollowThunk}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isProgress: state.usersPage.isProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {getUsersThunk, setFollowThunk, setUnFollowThunk}),
    withAuthRedirect
)(UsersContainer);