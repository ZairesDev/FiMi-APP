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
          <Route path='/' exact component={Home} />
          <Route path='/' component={Logout} />
          <Route path='/Login' component={Login} />
          <Route path='/Search' component={Search} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/Signup' component={Signup} />
        </Routes>
      </Router>
    </div>
  )
}

export default App