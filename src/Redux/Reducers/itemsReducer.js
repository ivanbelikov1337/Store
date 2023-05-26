import { ITEMS_LOAD} from "../Other/type";


const initialState = {
    items: [],


}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case   ITEMS_LOAD:
            const itemsNew = action.data.map(res => {
                return {
                    title: res.title,
                    id: res.id,
                    price: res.price,
                    description: res.description,
                    image: res.image,
                    category: res.category,
                    rating: res.rating

                }
            })
            return {
                ...state,
                items: itemsNew
            }
        default:
            return state
    }
}