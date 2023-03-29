import { nanoid } from 'nanoid'

export function generateRandomNumbers(count, min, max) {
  let randomNumbers = []

  for (let i = 0; i < count; i++) {
    randomNumbers.push({
      id: nanoid(),
      value: Math.floor(Math.random() * (max - min + 1)) + min,
      isHeld: false,
    })
  }

  return randomNumbers
}
