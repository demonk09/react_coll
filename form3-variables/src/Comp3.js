import React from 'react'

export default function Comp3(props) {
    let data=props.obj
  return (
    <div>
        
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.marks}</h1>
    </div>
  )
}
