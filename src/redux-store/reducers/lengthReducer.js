const initialValue = 0

const lengthReducer = (state=initialValue,action) => {
    switch (action.type) {
        case "SET_LENGTH": {
            return action.payload
        }
        default: {
            return state
        }
    }
}
export default lengthReducer