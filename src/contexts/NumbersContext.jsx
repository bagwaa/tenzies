import { createContext, useState } from 'react'
import { generateRandomNumbers } from '../utils/helper'

const NumbersContext = createContext()

function NumbersProvider({ children }) {
  // Give me 10 numbers between 1 and 6 inclusive
  const startingNumbers = generateRandomNumbers(10, 1, 6)
  const [numbers, setNumbers] = useState(startingNumbers)

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
          number.value = Math.floor(Math.random() * (max - min + 1)) + min
        }

        return number
      })
    )
  }

  const resetNumbers = () => setNumbers(generateRandomNumbers(10, 1, 6))

  return (
    <NumbersContext.Provider
      value={{
        numbers,
        rollDice,
        holdDice,
        resetNumbers,
      }}
    >
      {children}
    </NumbersContext.Provider>
  )
}

export default NumbersContext
export { NumbersProvider }
