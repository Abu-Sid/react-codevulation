import React, { useEffect, useState } from 'react'

function HookEffectApi() {
    const [post, setPost] = useState({})
    const [id,setId]=useState('')
    const [getData, setGetData] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${getData}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPost(data)
        })
    }, [getData])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={()=>setGetData(id)}>Data Fetch</button>
            <h1>{post.title}</h1>
        </div>
    )
}

export default HookEffectApi
