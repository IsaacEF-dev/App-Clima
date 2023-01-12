import React from 'react'

export const NotConnection = ({imagen,mensaje}) => {
    console.log(imagen)
  return (
    <div className="content__error">
    <h2 className="message">{mensaje}</h2>
    <img src={imagen} className='img__error' alt="" />
    </div>
  )
}
