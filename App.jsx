import { createRoot } from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DashboardPage from "./pages/DashboardPage.jsx"
import ExplorerPage from "./pages/ExplorerPage.jsx"
import NavigationBar from "./components/NavigationBar.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/explorer" element={<ExplorerPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

