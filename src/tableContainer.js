import React,{useEffect, useState} from 'react'
import Table from './table'
import {useDispatch} from 'react-redux'
import { fetchPhotos } from './redux-store/actions/get.action'
import Pagination from './pagination'

const  TableContainer = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage]=useState(5)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    useEffect(() => {
        dispatch(fetchPhotos(indexOfFirstPost, postPerPage))
    },[currentPage])
    

    const handlePage = (val) => {
       setCurrentPage(val)
    }
    return (
        <div>
            <Table/>
            <Pagination postPerPage={postPerPage} handlePage={handlePage}/>
        </div>
    )
}

export default TableContainer
