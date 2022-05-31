import React, { useContext } from "react"
import DataContext from "../../context/DataContext"

export default function Navbar() {
    const { name, handleOnChange, topsongs } = useContext(DataContext)
    return (<>
        <p>---{JSON.stringify(topsongs)}</p>
        <input type="text" onChange={handleOnChange} />
        <p>{name}</p>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">HOME</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Top Songs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top Artists</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Add Song</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {/* <button onClick={getData}>All Songs</button> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}