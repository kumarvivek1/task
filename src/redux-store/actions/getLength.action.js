import axios from 'axios'

const setLength= (length) => {
    return {type:'SET_LENGTH',payload:length}
}

export const fetchLength = () => {
    return (dispatch) => {
        const url = `http://jsonplaceholder.typicode.com/photos`
        axios.get(url)
            .then((Response) => {
                dispatch(setLength(Response.data.length))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}