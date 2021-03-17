import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={style.dialog}><NavLink to={path} activeClassName={style.active}>{props.name}</NavLink></li>
    );
}

export default DialogItems;