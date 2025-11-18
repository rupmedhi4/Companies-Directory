import react from "react"
import Home from "./pages/Home"
import { CompanyProvider } from "./context/CompanyContext"
import { ToastContainer, toast } from 'react-toastify';



export default function () {
  return (
    <CompanyProvider>
      <Home />
      <ToastContainer />
    </CompanyProvider>
  )
}