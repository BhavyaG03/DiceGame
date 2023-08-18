import './App.css'
import HomePage from './HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Play from './Play'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}>
      </Route>
      <Route path='/play' element={<Play></Play>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
