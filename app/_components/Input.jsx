import React from 'react'

export default function Input({id, label, type, ...props}) {
  return (
    <div className='mb-4'>
      <label htmlFor={id} className="block text-gray-600 font-semibold mb-2">{label}</label>
            <input 
                type={type} 
                id={id} 
                name={id} 
                className=" focus:border-blue-400 w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                autoComplete="off"
                {...props}
            />
    </div>
  )
}
