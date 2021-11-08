import {Link} from "react-router-dom"
import "./App.css"
const NavBar = () =>{
    return (
        <nav class="nav">
            <ul>
                <il>
                    <Link to="/">Home</Link>
                </il>
                <il>
                    <Link to="/topheadlines">Top Headlines</Link>
                </il>
                <il>
                <Link to="/multiple">Multiple</Link> 
                </il>
                <il>
                    <Link to="/search">Search</Link>
                </il>
            </ul>
        </nav>
    )
}

export default NavBar;