import { Link } from "react-router-dom"

const Menu=()=>{
    
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="./imagenes/logoSena.png" width={50} alt="" /></a>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-2">
                                <Link to="/">Aprendices</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/programas">Programas</Link> 
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/acercaDe">Acerca de Nosotros</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu