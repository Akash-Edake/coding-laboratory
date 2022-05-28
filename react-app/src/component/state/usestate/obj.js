import React, { useState } from 'react'

function Obj1() {
    const [old,setnew] = useState('oldvalue')
  return (
    <>
    <div>{old}</div>
    <input value={old} onChange={e=>setnew(e.target.value)}/>
    </>
  )
}

export default Obj1