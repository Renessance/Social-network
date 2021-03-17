import s from './Navigation.module.css';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></li>
                <li><NavLink to="/Users" activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>New</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;