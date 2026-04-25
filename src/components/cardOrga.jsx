import React from 'react'

export default function CardOrga({ imagen, cargo, nombre, className= "bg-[#C1272D]"}) {
  return (
    <div className={`flex  text-white rounded-2xl justify-center items-center  shadow-md ${className}`}>        
      <img src={imagen} className='w-40 rounded-2xl'/>
        <div className=' px-3'>
            <h1 className='text-xl md:text-3xl text-white font-bold'>{cargo}</h1>
            <p className='text-base'>{nombre}</p>
        </div>
    </div>
  )
}
   