import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLength } from './redux-store/actions/getLength.action'
import './pagination.css'

function Pagination(props) {
    const dispatch=useDispatch()
    const { postPerPage , handlePage} = props
    const pageNumbers = [1,2,3,4,5,6,7,8,9]

    const changePage = (num) => {
        handlePage(num)
    }
    
    return (
        <div>
            <ul className='pagintion'>
                {
                    pageNumbers.map((number) => {
                        return (
                    <li key={number} className="page-item" value={number}>
                                <a href="!#" className="page-link" onClick={()=>changePage(number)}>{number}</a>
                    </li>)
                })
                }
            </ul> 
        </div>
    )
}

export default Pagination
