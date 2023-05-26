import React, {useEffect} from 'react';
import Blog from "./Blog";
import {useDispatch, useSelector} from "react-redux";
import {getPostItems} from "../../Redux/Other/action";

const BlogContainer = (props) => {
    const post = useSelector(state => state.postReducer.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostItems())
    }, [dispatch]);


    return (
        <Blog post={post}/>
    );
}

export default BlogContainer;