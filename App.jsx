import { createRoot } from "react-dom/client"
import NavigationBar from "./components/NavigationBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Card 
                song_title = "Many Men"
                album_title = "Get Rich Or Die Trying'"
                number_of_likes = "1000 likes"
                number_of_comments = "300 comments"
                
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

