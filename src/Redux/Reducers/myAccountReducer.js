import {
    GET_EXPERIENCE_FIFTIETH_POINT,
    GET_EXPERIENCE_TEN_POINT,
    LEVEL_UP,
    REGISTER_DATA, RESET_EXPERIENCE,
    USER_ADMIN_LOG_OUT,
    USER_IS_AUTH,
    USER_IS_AUTH_ADMIN,
    USER_LOG_OUT
} from "../Other/type";

const initialState = {
    isAuth: false,
    isAuthAdmin: false,
    signIn: [],
    levelUser: 1,
    experience: 0
}

export const myAccountReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LEVEL_UP:
            return {
                ...state,
                levelUser: state.levelUser + 1
            }
        case GET_EXPERIENCE_TEN_POINT:
            return {
                ...state,
                experience: state.experience + 10
            }
        case GET_EXPERIENCE_FIFTIETH_POINT:
            return {
                ...state,
                experience: state.experience + 50
            }
        case RESET_EXPERIENCE:
            return {
                ...state,
                experience: state.experience = 0
            }
        case REGISTER_DATA:
            const newTextInput = action.newRegister.textInput
            const newEmailInput = action.newRegister.emailInput
            const newPasswordInput = action.newRegister.passwordInput
            const newTextNameInput = action.newRegister.textNameInput
            return {
                ...state,
                signIn: {newTextInput, newEmailInput, newPasswordInput,newTextNameInput}
            }
        case USER_IS_AUTH:
            return {
                ...state,
                isAuth: state.isAuth = true
            }
        case USER_IS_AUTH_ADMIN:
            return {
                ...state,
                isAuthAdmin: state.isAuthAdmin = true
            }
        case USER_LOG_OUT:
            return {
                ...state,
                isAuth: state.isAuth = false
            }
        case USER_ADMIN_LOG_OUT:
            return {
                ...state,
                isAuthAdmin: state.isAuthAdmin = false
            }
        default:
            return state
    }
}