import axios from 'axios'

export const deletePhotos = (id) => {
    return {type:'REMOVE_PHOTOS',payload:id}
}
