import React, { useEffect, useState } from 'react'

export default function HookEffectCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        
            document.title=`click ${count}`
    
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count + 1)}>Click {count}</button>
        </div>
    )
}
