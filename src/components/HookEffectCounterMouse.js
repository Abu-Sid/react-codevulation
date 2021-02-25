import React, { useState } from 'react'
import HookEffectCounterThree from './HookEffectCounterThree'

function HookEffectCounterMouse() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookEffectCounterThree/>}
        </div>
    )
}

export default HookEffectCounterMouse
