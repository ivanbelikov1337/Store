import React from 'react';
import style from "./blog.module.css"
import BlogItems from "./BlogItems/BlogItems";



const Blog = (props) => {
    return (
        <div className={style.container}>
            <p className={style.title}> Blog </p>
            <div className={style.horizontal}>
                {props.post.map(res => <BlogItems key={res.id} post={res}/>)}
            </div>
        </div>
    );
}

export default Blog;