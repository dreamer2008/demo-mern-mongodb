import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './components/Employees';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
