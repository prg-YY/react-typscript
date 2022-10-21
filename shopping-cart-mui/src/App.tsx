import { Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>
  )
}
