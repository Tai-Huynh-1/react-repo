import { REMOVE_USER, SET_USER } from "./profileUserTypes"

const initialProfileUser = null

const profileUserReducer = (state = initialProfileUser, action) => {
    switch (action.type) {
        case SET_USER:
            return {...action.payload}

        case REMOVE_USER:
            return null

        default:
            return state    
    }
}

export default profileUserReducer