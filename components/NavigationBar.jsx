import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <nav className="nav-bar">
            <h2 className="nb-title">SongSherpa</h2>
            <div className="nb-page-options">
                <Link to={`/`} className="nb-page-options-links">
                    <p>Dashboard</p>
                </Link>
                <Link to={`/explorer`} className="nb-page-options-links">
                    <p>Explorer</p>
                </Link>
                <p>About</p>
            </div>
        </nav>
    )
}

export default NavigationBar; 