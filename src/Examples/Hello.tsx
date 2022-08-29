import React from 'react'
interface FullName{
  firstName: string;
  lastName: string;
}
const fullNameObj:FullName = {
  firstName: "Jon",
  lastName: "Snow"
}

function Hello(props:FullName) {

  return (
    <div>Hello {props.firstName}</div>
  )
}
export default Hello