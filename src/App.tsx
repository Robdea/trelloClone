import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './interfaces/auth/Login'
import Register from './interfaces/auth/Register'
import MainLayout from './layouts/MainLayout'
import Board from './interfaces/Board'
import List from './interfaces/List'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='/' element={<MainLayout/>}>
          <Route path=':username/boards' element={<Board/>}/>
          <Route path=':/boards' element={<List/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
