import React, { useContext } from 'react'
import NumbersContext from '../contexts/NumbersContext'

export default function Foo() {
  const { numbers } = useContext(NumbersContext)

  return (
    <div className="text-white w-full">
      {numbers.map((number, index) => (
        <p
          key={index}
          className="flex p-4 border border-white w-4 h-4 justify-center items-center"
        >
          {number.value}
        </p>
      ))}
    </div>
  )
}
