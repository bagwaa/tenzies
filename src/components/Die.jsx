import React from 'react'

const Die = function ({ num, holdDice }) {
  return (
    <div
      style={{ backgroundColor: num.isHeld ? '#59E391' : 'white' }}
      className="flex hover:cursor-pointer font-karla justify-center items-center w-12 h-12 bg-white drop-shadow-md rounded"
      onClick={holdDice}
    >
      {num.value}
    </div>
  )
}

export default Die
