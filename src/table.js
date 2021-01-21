import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deletePhotos} from './redux-store/actions/delete.action'

function Table(props) {
    const data = useSelector((state) => state.photos)
    const dispatch=useDispatch()
    const imgStyle = {
        height: "120px",
        width:"120px"
    }
    const handleRemove = (id)=>{
        dispatch(deletePhotos(id))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>image</th>
                        
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
                                    <td><button onClick={()=>handleRemove(ele.id)}>delete</button></td>
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
