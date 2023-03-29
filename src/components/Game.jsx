import React, { useContext, useState, useEffect } from 'react'
import Die from './Die'
import Confetti from 'react-confetti'
import NumbersContext from '../contexts/NumbersContext'

function Game() {
  const [win, setWin] = useState(false)
  const { numbers, resetNumbers, holdDice, rollDice } =
    useContext(NumbersContext)

  const resetGame = () => {
    setWin(false)
    resetNumbers()
  }

  useEffect(() => {
    let firstNumber = numbers[0].value
    let allEqual = numbers.every((number) => number.value === firstNumber)
    let allHeld = numbers.every((number) => number.isHeld === true)

    if (allHeld && allEqual) {
      setWin(true)
    }
  }, [numbers])

  return (
    <main className="flex flex-col items-center w-96 h-96 rounded-lg bg-gray-200">
      <div className="w-full text-center py-6">
        {win && <Confetti />}
        <h1 className="font-karla text-4xl my-4">Tenzies</h1>
        <p
          style={{ fontWeight: 400 }}
          className="text-xs w-4/5 mx-auto text-gray-600"
        >
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {numbers.map((num) => (
          <Die key={num.id} num={num} holdDice={() => holdDice(num.id)} />
        ))}
      </div>
      {win === false ? (
        <button
          onClick={() => rollDice(1, 6)}
          className="bg-blue-700 text-white px-8 py-2 rounded-md mt-8"
        >
          Roll
        </button>
      ) : (
        <button
          onClick={resetGame}
          className="bg-blue-700 text-white px-8 py-2 rounded-md mt-8"
        >
          Reset
        </button>
      )}
    </main>
  )
}

export default Game
