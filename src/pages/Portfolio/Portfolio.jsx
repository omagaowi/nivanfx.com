import NavBar from "../../components/NavBar"
import PortfolioMain from "./PortfolioMain.jsx"
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="container portfolio">
             <div className="portfolio-hero">
                <NavBar />
                <div className="portfolio-hero-main">
                    <h1>Portfolio Management</h1>
                </div>
            </div>
            <PortfolioMain />
        </div>
    )
}

export default Portfolio