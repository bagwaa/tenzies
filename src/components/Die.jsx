import React from 'react'

const Die = function ({ num, holdDice }) {
  const isWorking = true
  return (
    <div
      style={{ backgroundColor: num.isHeld ? '#59E391' : 'white' }}
      className={`hover:cursor-pointer ${isWorking && 'flex'
        } font-karla justify-center items-center w-12 h-12 bg-white drop-shadow-md rounded`}
      onClick={holdDice}
    >
      {num.value}
    </div>
  )
}

export default Die
