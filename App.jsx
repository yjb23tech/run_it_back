import { createRoot } from "reac-dom/client"

const App = () => {
    return (
        <div>
            <h1>Sanity Check</h1>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

