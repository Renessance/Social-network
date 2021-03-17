import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "./../../assets/images/profile.png"
import React from "react";
import Head from "../common/library/Head";

const Header = (props) => {
    return (
        <header className={style.header}>
            <Head/>
            <div className={style.loginBlock}>
                <div className={style.info}>
                    {
                        props.isAuth
                            ? <div className={style.wrapperImage}>
                                <p>{props.login}</p>
                                <img className={style.img} src={props.photos !== '' ? `${props.photos.small}` : userPhoto}/>
                            </div>
                            : ''
                    }
                </div>
                {
                    props.isAuth
                        ? <div>
                            <button onClick={props.logoutThunk}>Log out</button>
                        </div>
                        : <NavLink to={"login/"}><p>Login</p></NavLink>
                }
            </div>
        </header>
    );
}

export default Header;