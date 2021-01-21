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
        default: {
            return [...state]
        }
    }
}
export default photosReducer