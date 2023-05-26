import {
    ADD_TO_CARD, CREAT_ITEM_HISTORY,
    CREAT_ORDER,
    DELETE_IN_CARD,
    DELETE_ORDER,
} from "../Other/type";


const initialState = {
    orders: [],
    createOrder: [],
    ItemHistory: [],

}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            let isInArray = false
            let orders = state.orders
            orders.forEach(e => {
                if (e.id === action.item.id) {
                    isInArray = true
                }
            })
            if (!isInArray) {
                return (() => {
                    const nextOrder = [...state.orders, action.item]
                    return {
                        ...state,
                        orders: nextOrder

                    }
                })()
            }
            return (() => {
                return {
                    ...state,
                    orders: state.orders

                }
            })()

        case DELETE_IN_CARD:
            return (() => {
                const {id} = action
                const {orders} = state
                const itemIndex = orders.findIndex(res => res.id === id)
                const nextItems = [
                    ...orders.slice(0, itemIndex),
                    ...orders.slice(itemIndex + 1)
                ]
                return {
                    ...state,
                    orders: nextItems,

                }
            })()
        case CREAT_ORDER:
            const firstName = action.firstName
            const lustName = action.lustName
            const phoneNumber = action.phoneNumber
            return {
                ...state,
                createOrder: {firstName, lustName, phoneNumber}
            }
        case DELETE_ORDER:
            return (() => {
                const clearOrder = []
                return {
                    ...state,
                    orders: clearOrder,

                }
            })()
        case CREAT_ITEM_HISTORY: {
            const orderHistory = [...state.ItemHistory]
            const newOrderHistory = [...action.item]
            return {
                ...state,
                ItemHistory: [...orderHistory, ...newOrderHistory]
            }
        }
        default:
            return state
    }
}