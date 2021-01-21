import axios from 'axios'

const getPhotos = (data) => {
    return {type:'GET_PHOTOS',payload:data}
}

export const fetchPhotos = (firstIndex,lastIndex) => {
    return (dispatch) => {
        const url = `http://jsonplaceholder.typicode.com/photos?_start=${firstIndex}&_limit=${lastIndex}`
        axios.get(url)
            .then((Response) => {
                dispatch(getPhotos(Response.data))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}