import { Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
          margin: "16px",
          border: "1px solid #e0e0e0",
          borderRadius: "16px",
          maxWidth: "100%",
          overflow: "inherit",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </ShoppingCartProvider>
  )
}

export default App
