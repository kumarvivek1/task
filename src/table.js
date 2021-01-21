import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deletePhotos} from './redux-store/actions/delete.action'

function Table() {
    const data = useSelector((state) => state.photos)
    const dispatch=useDispatch()
    const imgStyle = {
        height: "100px",
        width:"100px"
    }
    const handleRemove = (id) => {
        const agree = window.confirm("are you sure")
        if (agree) {
            dispatch(deletePhotos(id))
        }  
    }
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr >
                        <th>id</th>
                        <th>title</th>
                        <th>image</th>
                        <th>action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td><img src={ele.url} alt='' style={imgStyle} /></td>
                                    <td><button className="btn btn-danger" onClick={()=>handleRemove(ele.id)}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </div>
    )
}

export default Table
