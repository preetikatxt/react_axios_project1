import React, { useEffect, useState } from 'react'
import axios from 'axios'
import'./App.css'

function Featch() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='container'>
        <div className='mt-3'>
            <h3> Fetch data from API in react with axios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=>{
                            return <tr key={index}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Featch