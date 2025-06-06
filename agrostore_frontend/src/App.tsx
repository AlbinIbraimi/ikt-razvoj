import './App.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from './components/navBar'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    background: {
      default: "#f9f9f9",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
