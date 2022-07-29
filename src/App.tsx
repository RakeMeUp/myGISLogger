import './App.scss'
import { Routes, Route } from 'react-router-dom'
import DataPage from './pages/DataPage'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/VarMenu/Menu'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/datapage" element={<DataPage />}/>
      </Routes>
      <Navbar/>
      <Menu />
    </div>
  )
}

export default App
