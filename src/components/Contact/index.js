import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap';
import Resume from '../../assets/images/Dimos Pagkas Resume.pdf'

function ContactForm() {
    // // manage form data, empty out the initialize values
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // // deconstructing the formState object into it's named properties
    // const { name, email, message } = formState;
    // // error message
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);

    //             if(!isValid) {
    //                 setErrorMessage('Your email is invalid');
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         // checking if name and message has input
    //         } else {
    //             if (!e.target.value.length) {
    //               setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //               setErrorMessage('');
    //             }
    //     }
    //     // setFormState is updating formState for the property
    //     if (!errorMessage) {
    //     setFormState({...formState, [e.target.name]: e.target.value })
    //     }
    // }

    // // form submit
    // function handleSubmit(e) {
    //     e.preventDefault();

    // }

    // function Contact() {
    //     const [email, setEmail] = useState("")
    //     const [userName, setUserName] = useState("")
    //     const [note, setNote] = useState("")

    //     const handleInputChange = e => {
    //         const { target } = e
    //         const inputType = target.name
    //         const inputValue = target.value

    //         if (inputType === "email") {
    //             setEmail(inputValue)
    //         } else if (inputType === "userName") {
    //             setUserName(inputValue)
    //         } else {
    //             setNote(inputValue)
    //         }
    //     }

    //     const handleFormSubmit = e => {
    //         // Preventing the default behavior of the form submit (which is to refresh the page)
    //         e.preventDefault()

    //         // If everything goes according to plan, we want to clear out the input after a successful registration.
    //         setUserName("")
    //         setNote("")
    //         setEmail("")
    //     }
    //     return (
    //         <div>
    //             <div className="mb-3">
    //                 <label htmlFor="exampleFormControlInput1" className="form-label">
    //                     Name
    //                 </label>
    //                 <input
    //                     value={userName}
    //                     type="text"
    //                     name="userName"
    //                     className="form-control"
    //                     onChange={handleInputChange}
    //                     id="exampleFormControlInput1"
    //                     placeholder="name"
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="exampleFormControlInput1" className="form-label">
    //                     Email address
    //                 </label>
    //                 <input
    //                     value={email}
    //                     type="email"
    //                     name="email"
    //                     className="form-control"
    //                     onChange={handleInputChange}
    //                     id="exampleFormControlInput1"
    //                     placeholder="name@example.com"
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="exampleFormControlTextarea1" className="form-label">
    //                     Notes
    //                 </label>
    //                 <textarea
    //                     value={note}
    //                     className="form-control"
    //                     onChange={handleInputChange}
    //                     id="exampleFormControlTextarea1"
    //                     rows="3"
    //                 ></textarea>
    //                 <div>
    //                     <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
    //                         Submit
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <section>
            <h1 data-testid="h1tag" className="contact">
                contact me
            </h1>

            <div className="contact-icons">
                <Row>
                    <Col lg={3} md={12}>
                        <a target="_blank" href="https://github.com/djpdim">
                            <img
                                src="https://img.icons8.com/doodle/100/000000/github--v1.png"
                                alt="github-logo"
                                class="icon"
                            />
                        </a>
                        <p class="icon-text">github</p>
                    </Col>

                    <Col lg={3} md={12}>
                        <a target="_blank" href="https://www.linkedin.com/in/dimosthenis-pagkas-b5301aa7/">
                            <img
                                src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
                                alt="linkedin-logo"
                                class="icon"
                            />
                        </a>
                        <p class="icon-text">linkedin</p>
                    </Col>

                    <Col lg={3} md={12}>
                        <a href="mailto:dimospagkas@yahoo.g">
                            <img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-logo" />
                        </a>
                        <p class="icon-text">email</p>
                    </Col>

                    <Col lg={3} md={12}>
                        <a target="_blank" href={Resume} download>
                            <img src="https://img.icons8.com/doodle/120/000000/pdf-2.png" alt="resume" />
                        </a>
                        <p class="icon-text">resume</p>
                    </Col>
                </Row>
            </div>

            <div class="resume-container">
                <Row>
                    <Col lg={4} md={12}>
                        <h2 class="resume">font-end technologies</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React.js</li>
                            <li>Framework (Bootstrap, Materalize)</li>
                            <li>UI/UX Design</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <h2 class="resume">back-end technologies</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL (mysql lite3, mysql2)</li>
                            <li>NoSQL (MongoDB, Mongoose)</li>
                            <li>API's (web, third-party, RESTful, server-side)</li>
                            <li>Templating language (Handlebars)</li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <h2 class="education">my education</h2>
                        <p>
                            <span className="school-name">Columbia University</span>
                            <br></br>
                            Full Stack Web Developer Boot Camp - Certification
                            <br></br>
                            <br></br>
                            <span className="school-name">TEI of Kalamatas</span>
                            <br></br>
                            Bachelor of Business Administration in Finance
                            <br></br>

                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ContactForm

// <section>
//     <h1 data-testid='h1tag' className="contact">CONTACT ME (UNDER CONSTRUCTION)</h1>
//     <form id="contact-form">
//         <div class="col-12">
//             <label htmlFor="name">Name:</label>
//             <input type="text" class="form-control" width="100px" defaultValue={name} onBlur={handleChange} name="name" />
//         </div>
//         <div class="col-12">
//             <label htmlFor="email">Email address:</label>
//             <input type="email" class="form-control" defaultValue={email} onBlur={handleChange} name="email" />
//         </div>
{
    /* <div class="col-12">
                <label htmlFor="message">Message:</label>
                <textarea name="message" class="form-control" defaultValue={message} onBlur={handleChange} rows="7" />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <br></br>
            <div class="col-12">
            <button data-testid='button' class="btn btn-outline-dark" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section> */
}
