function Header(){
    return (
        <nav className="nav">
            <img className="globeLogo" src={process.env.PUBLIC_URL+'images/globe.png'} />
            <h3 className="header">my travel journal.</h3>
        </nav>
    )
}

export default Header