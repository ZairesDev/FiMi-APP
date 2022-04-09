
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import Logout from './pages/Logout'

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/' element={<Logout />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App