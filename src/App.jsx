import React, { useEffect, useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const generateNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const allNewDice = (count, min, max) => {
    let randomNumbers = []

    for (let i = 0; i < count; i++) {
      randomNumbers.push({
        id: nanoid(),
        value: generateNumberBetween(min, max),
        isHeld: false,
      })
    }

    return randomNumbers
  }

  const [tenzies, setTenzies] = useState(false)
  const [numbers, setNumbers] = useState(() => allNewDice(10, 1, 6))

  useEffect(() => {
    let firstNumber = numbers[0].value
    let allEqual = numbers.every((number) => number.value === firstNumber)
    let allHeld = numbers.every((number) => number.isHeld === true)

    if (allHeld && allEqual) {
      setTenzies(true)
      console.log(tenzies)
    }
  }, [numbers])

  const holdDice = (id) => {
    setNumbers((numbers) =>
      numbers.map((number) => {
        if (number.id === id) {
          return { ...number, isHeld: !number.isHeld }
        }

        return number
      })
    )
  }

  const rollDice = (min, max) => {
    setNumbers((numbers) =>
      numbers.map((number) => {
        if (number.isHeld === false) {
          number.value = generateNumberBetween(min, max)
        }

        return number
      })
    )
  }

  const resetGame = () => {
    setNumbers(allNewDice(10, 1, 6))
    setTenzies(false)
  }

  return (
    <main className="flex flex-col items-center w-96 h-96 rounded-lg bg-gray-200">
      <div className="w-full text-center py-6">
        {tenzies && <Confetti />}
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
      {tenzies === false ? (
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

export default App
