import axios from 'axios'

export const deletePhotos = (id) => {
    return {type:'GET_PHOTOS',payload:id}
}
