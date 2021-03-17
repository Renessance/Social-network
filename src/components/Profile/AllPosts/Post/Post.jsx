import style from './Post.module.css';
import userPhoto from "./../../../../assets/images/profile.png"

const Post = (props) => {
    return (
        <div className={style.onePost}>
            <div className={style.imageWrapper}>
                <img className={style.img} src={props.avatar != null ? `${props.avatar}` : userPhoto} />
                <p>{props.fullname}</p>
            </div>
            
            <div className={style.postImage}>
            </div>
            <div className={style.postContent}>
                <p className={style.message}>{props.post}</p>
                <div><p>Like {props.likes} <i className="fas fa-heart" style={{color: "rgb(69 88 211)"}}/> </p></div>
            </div>
        </div>
    );
}

export default Post;