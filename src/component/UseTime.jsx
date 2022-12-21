import React, { useState, useEffect } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `업데이트 횟수 : ${count}`
    })
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Title increase</button>
            <button onClick={()=>setCount(count-1)}>Title decrease</button>
        </>
    )
}

export default MyComponent;