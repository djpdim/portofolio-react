import React from "react"

function Resume() {
    return (
        <section class="container">
            <h2 className="top-title">Resume</h2>
            <hr></hr>

            <div>
                <div class="mt-5">
                    <h2 className="top-title">Dimosthenis Pagkas</h2>
                    <ul>
                        <li>Financial and Audit Controller, full-stack web development and managing integrations.</li>
                    </ul>

                    <p class="mt-5">
                        <a href="https://www.linkedin.com/in/dimosthenis-pagkas-b5301aa7/">
                            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedIn" />
                        </a>
                    </p>

                    <a
                        href="https://github.com/djpdim/react-portfolio/docs/Dimosthenis Pagkas resume.docx"
                        class="link"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div>
                    <h2 className="top-title">Proficiencies</h2>
                    <ul>
                        <li>
                            Figma, VS Code, Insomnia, MySQL WorkBench, Xcode, Sage 300 Construction and Real Estate,
                            <br />
                            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,
                            <br />
                            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume
