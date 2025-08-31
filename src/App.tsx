import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './interfaces/auth/Login'
import Register from './interfaces/auth/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
