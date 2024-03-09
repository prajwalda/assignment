import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Recruitment from './pages/Recruitment'
import Scheduler from './Component/Scheduler'
import Employee from "./pages/Employee"
import Department from "./pages/Department"
import Setting from "./pages/Setting"
import Support from "./pages/Support"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/recruitment' exact element={<Recruitment />}></Route>
          <Route path='/schedule' exact element={<Scheduler />}></Route>
          <Route path='/employee' exact element={<Employee />}></Route>
          <Route path='/department' exact element={<Department/>}></Route>
          <Route path='/support' exact element={<Support />}></Route>
          <Route path='/setting' exact element={<Setting />}></Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
