import {
    ERROR_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ITEMS_LOAD,
    ADD_TO_CARD,
    DELETE_IN_CARD,
    USER_IS_AUTH,
    USER_IS_AUTH_ADMIN,
    CREAT_ORDER,
    DELETE_ORDER,
    USER_LOG_OUT,
    USER_ADMIN_LOG_OUT,
    CREAT_CONTACT,
    POSTS_LOAD,
    REGISTER_DATA,
    CREAT_ITEM_HISTORY,
    USER_UPDATE,
    LEVEL_UP,
    GET_EXPERIENCE_TEN_POINT,
    GET_EXPERIENCE_FIFTIETH_POINT,
    RESET_EXPERIENCE,
} from "./type";


export const addToCard = (item) => {
    return {
        type: ADD_TO_CARD,
        item

    }
}
export const clearOrder = () => {
    return {
        type: DELETE_ORDER,

    }
}

export const levelUp = () => {
    return {
        type: LEVEL_UP

    }
}
export const resetExperience = () => {
    return {
        type: RESET_EXPERIENCE

    }
}
export const getTenExperience = () => {
    return {
        type: GET_EXPERIENCE_TEN_POINT

    }
}
export const getFiftiethExperience = () => {
    return {
        type: GET_EXPERIENCE_FIFTIETH_POINT
    }
}



export const creatItemOrderHistory = (item) => {
    return {
        type: CREAT_ITEM_HISTORY,
        item
    }
}

export const deleteInCard = (id) => {
    return {
        type: DELETE_IN_CARD,
        id

    }
}


export const registerData = (textInput, emailInput, passwordInput, textNameInput) => {
    const newRegister = {
        textInput: textInput,
        emailInput: emailInput,
        passwordInput: passwordInput,
        textNameInput: textNameInput
    }
    return dispatch => {
        dispatch({
            type: REGISTER_DATA,
            newRegister: newRegister
        })
    }
}


export const creatOrder = (firstName, lustName, phoneNumber) => {
    return dispatch => {
        dispatch({
            type: CREAT_ORDER,
            firstName,
            lustName,
            phoneNumber
        })
    }
}

export const creatContact = (firstName, lustName, subject) => {
    return dispatch => {
        dispatch({
            type: CREAT_CONTACT,
            firstName,
            lustName,
            subject
        })
    }
}


export const userIsAuth = () => {
    return {
        type: USER_IS_AUTH

    }
}


export const userIsAuthAdmin = () => {
    return {
        type: USER_IS_AUTH_ADMIN

    }
}
export const userLogOut = () => {
    return {
        type: USER_LOG_OUT

    }
}


export const userAminLogOut = () => {
    return {
        type: USER_ADMIN_LOG_OUT

    }
}


export const errorOff = () => {
    return {
        type: ERROR_DISPLAY_OFF,

    }
}
export const errorOn = (text) => {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        })

        setTimeout(() => {
            dispatch(errorOff())
        }, 2000)
    }
}

export const getDateItems = () => {
    return async dispatch => {
        try {
            const response = await fetch("https://fakestoreapi.com/products?limit=8")
            const jsonData = await response.json()
            dispatch({
                type: ITEMS_LOAD,
                data: jsonData
            })
        } catch (err) {
            dispatch(errorOn("ERROR API"))
        }
    }
}


export const getPostItems = () => {
    return async dispatch => {
        try {
            const response = await fetch("https://dummyjson.com/posts")
            const jsonData = await response.json()
            dispatch({
                type: POSTS_LOAD,
                data: jsonData
            })
        } catch (err) {
            dispatch(errorOn("ERROR API"))
        }
    }
}


export const getDateAllItems = () => {
    return async dispatch => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const jsonData = await response.json()
            dispatch({
                type: ITEMS_LOAD,
                data: jsonData
            })
        } catch (err) {
            dispatch(errorOn("ERROR API"))
        }
    }
}

