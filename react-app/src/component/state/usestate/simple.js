import React, { useState } from 'react'

function Simple() {

    const [old, setnew] =useState(0)
  return (
   <>
    <div>{old}</div>
    <button onClick={()=>setnew(old+1)}>click</button>
   </>
  )
}

export default Simple