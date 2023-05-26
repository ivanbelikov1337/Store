import React, {useState} from 'react';
import style from "../blog.module.css";
import {AiOutlineLike} from 'react-icons/ai';

const BlogItems = (props) => {

    const [like, setLike] = useState(props.post.reactions)

    const handleChangeLikes = () => {
        setLike(like + 1)
    }

    return (
        <div className={style.cardContent}>
            <div className={style.cardTitle}>
                {props.post.title}
            </div>
            <div className={style.cardExcerpt}>
                {props.post.body}
            </div>
            <div className={style.cardRimeToRead}>
                <AiOutlineLike onClick={handleChangeLikes} size={25}/> {like}
            </div>
        </div>
    );
}

export default BlogItems;
