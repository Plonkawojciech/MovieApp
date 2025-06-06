import './css/App.css'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import MyAccount from './pages/MyAccount'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourite />} />
          <Route path='/MyAccount' element={<MyAccount />} />
        </Routes>
      </main>
    </MovieProvider>
  )
  
}


export default App
