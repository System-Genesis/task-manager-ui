import React from 'react'

const Finish = ({ info }) => {
  return (
    <>
      <h1>name: {info?.user?.name}</h1>
      <h2>rule: {info?.user?.rule}</h2>
      {info?.pages.map(page => {
        return <>
          
        </>
      })}
    </>
  )
}

export default Finish;