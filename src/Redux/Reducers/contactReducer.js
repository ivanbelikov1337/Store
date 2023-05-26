import {CREAT_CONTACT} from "../Other/type";


const initialState = {
    contactData: []
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREAT_CONTACT:
            const firstName = action.firstName
            const lustName = action.lustName
            const subject = action.subject
            return {
                ...state,
                contactData: {firstName, lustName, subject}
            }
        default:
            return state
    }
}