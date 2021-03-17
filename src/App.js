import React from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";

import ProfileContainer from "./components/Profile/ProfileContainer";
import {withSuspense} from "./components/hoc/withSuspense";


// Lazy load components
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/Dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/Users' render={withSuspense(UsersContainer)}/>
                        <Route path='/Login' render={withSuspense(LoginContainer)}/>
                        <Route path="/News" render={News}/>
                        <Route path="/Music" render={Music}/>
                        <Route path="/Settings" render={Settings}/>
                        <Route path="*" render={() => <div>404 Page not found</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider
                store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default MainApp;