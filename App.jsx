import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar"

const App = () => {
    return (
        <div>
            <NavigationBar />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

