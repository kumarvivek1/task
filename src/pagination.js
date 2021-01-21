import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLength } from './redux-store/actions/getLength.action'


function Pagination(props) {
    const dispatch=useDispatch()
    const { postPerPage , handlePage} = props
    const pageNumbers = []
    const [pageCount, setPageCount] = useState(1)
    
    useEffect(() => {
        dispatch(fetchLength())
    })

    const length = useSelector((state) => state.length)
    const noOfPage=Math.ceil(length/(postPerPage*postPerPage))
    
    const lastIndex = pageCount * postPerPage
    const firstIndex = lastIndex - postPerPage + 1
    
    for (let i = firstIndex; i <=lastIndex; i++){
        if (length >= i) {
            pageNumbers.push(i)
        } 
    }
    

    const changePage = (num) => {
        handlePage(num)
    }
    
    return (
        <div>
            <ul className='pagination'>
                <li className="page-item"><a href="#" className="page-link"
                    onClick={() => { setPageCount(1)}}
                >first page</a></li>
                <li className="page-item"><a href="#" className="page-link"
                    onClick={() => {
                        if (pageCount > 1) {
                            setPageCount(pageCount-1)
                        }
                    }}
                >previous</a></li> 
                {
                    pageNumbers.map((number) => {
                        return (
                    <li key={number} className="page-item" value={number}>
                        <a href="!#" className="page-link" onClick={()=>changePage(number)}>{number}</a>
                    </li>)
                })
                }
                <li className="page-item"><a href="#" className="page-link"
                    onClick={() => {
                        if (noOfPage > pageCount) {
                            setPageCount(pageCount+1)
                        }
                    }}
                >next</a></li>
                <li className="page-item"><a href="#" className="page-link"
                    onClick={() => { setPageCount(noOfPage)}}
                >Last page</a></li>
            </ul> 
        </div>
    )
}

export default Pagination
