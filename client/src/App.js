import Navbar from './components/Navbar.js'
import { Route, Routes } from 'react-router'
import Home from './views/Home'
import View1 from './views/View1'
import View2 from './views/View2'
import View3 from './views/View3'


const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='View1' element={<View1 />} />
        <Route path='View2' element={<View2 />} />
        <Route path='View3' element={<View3 />} />
      </Routes>
    </div>
  )
}

export default App
