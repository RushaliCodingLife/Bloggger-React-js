import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './Components/Home'
import Edit from './Components/Edit'
import Add from './Components/Add'
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <>

      <Router>
<NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />

        </Routes>

      </Router>

    </>
  )
}
export default App