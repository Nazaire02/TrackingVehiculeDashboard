import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/demo.css'
import "./vendor/fonts/boxicons.css"
import "./vendor/css/core.css"
import "./vendor/css/theme-default.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login  from './containers/Login'
import AllDrivers from './containers/AllDrivers'
import DetailsCarburant from './containers/DetailsCarburant'
import DetailsMaintenance from './containers/DetailsMaintenance'
import Tracking from './containers/Tracking'
import AdminRoute from './routes/AdminRoute'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/Register' element={<Register/>}/> */}
        <Route  path='/home' element={<AdminRoute/>}>
          <Route path='AllDrivers' element={<AllDrivers/>}/>
          <Route path='Tracking' element={<Tracking/>}/>
          <Route path='DetailsCarburant' element={<DetailsCarburant/>}/>
          <Route path='DetailsMaintenance' element={<DetailsMaintenance/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
