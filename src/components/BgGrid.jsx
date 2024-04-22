import '../styles/bgGrid.css'

const BackgroundGrid = () => {
    const grids = ['grid', 'grid', 'grid', 'grid', 'grid', 'grid', 'grid']
    return (
        <div className="bg-grid">
            {
               grids.map(grid => (
                <div className="grid"></div>
               ))
            }
        </div>
    )
}

export default BackgroundGrid