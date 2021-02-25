import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'',lastName:''})
    return (
        <div>
                <input type="text" value={name.firstName} 
                onChange={(e)=>setName({...name,firstName:e.target.value})}/>
                <input type="text" value={name.lastName} 
                onChange={(e)=>setName({...name,lastName:e.target.value})}/>
                <h1>My First Name :{name.firstName}</h1>
                <h1>My Last Name :{name.lastName}</h1>
                <h3>{JSON.stringify(name)}</h3>
                
        </div>
    )
}

export default HookCounterThree
