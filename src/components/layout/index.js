import Navbar from "../navigation/navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
            {children}
            </div>
            <footer />
        </div>
    )
}

export default Layout