import { NumbersProvider } from './contexts/NumbersContext'
import Game from './components/Game'

function App() {
  return (
    <NumbersProvider>
      <Game />
    </NumbersProvider>
  )
}

export default App
