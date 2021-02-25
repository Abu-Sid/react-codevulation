import React, { useEffect, useState } from 'react'

function HookEffectCounterFour() {
    const [count, setCount] = useState(0)
    const tick=()=>{
        setCount(count + 1)
    }
    // const tick=()=>{
    //     setCount(prevCount=>prevCount + 1) //no need of dependency just []
    // }
    useEffect(() => {
        // const tick=()=>{
        //     setCount(count + 1)
        // }
        const interval= setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            Count: {count}
        </div>
    )
}

export default HookEffectCounterFour
