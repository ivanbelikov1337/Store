import {POSTS_LOAD} from "../Other/type";


const initialState = {
    post: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_LOAD:
            const newPost = action.data.posts.map( res => {
                return  {
                    id: res.id,
                    title: res.title,
                    body: res.body,
                    tags: res.tags,
                    reactions: res.reactions,
                }
            })
            return {
                ...state,
                post: newPost
            }



        default:
            return state
    }
}