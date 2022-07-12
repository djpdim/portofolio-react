import React from 'react'

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//  we destructure the currentpage and handlepagechange properties from the props object

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
                    // its a ternery operator

                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    //  TODO: Add a comment explaining what this logic is doing
                    // its creating the seperators tabs for about work contact

                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#work"
                    onClick={() => handlePageChange("Work")}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === "Work" ? "nav-link active" : "nav-link"}
                >
                    Work
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    //  TODO: Add a comment explaining what this logic is doing

                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>
        </ul>
    )
}

export default NavTabs