const initialValue = []

const photosReducer = (state=initialValue,action) => {
    switch (action.type) {
        case "GET_PHOTOS": {
            return [...action.payload]
        }
        case "REMOVE_PHOTOS": {
            return state.filter((ele) => {
                return ele.id!==action.payload
            })
        }
        case 'UPDATE_TITLE': {
            return state.map((ele) => {
                if (ele.id === action.payload.id) {
                    return {...ele,title:action.payload.title}
                } else {
                    return ele
                }
            })
        }
        default: {
            return [...state]
        }
    }
}
export default photosReducer