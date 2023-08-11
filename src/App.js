import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Discover from "./components/pages/discover.component"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Discover />} />
      </Routes>
    </Router>
  )
}