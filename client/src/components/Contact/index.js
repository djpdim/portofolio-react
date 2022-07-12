import React, { useState } from "react"
import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [note, setNote] = useState("")

    const handleInputChange = e => {

        const { target } = e
        const inputType = target.name
        const inputValue = target.value


        if (inputType === "email") {
            setEmail(inputValue)
        } else if (inputType === "userName") {
            setUserName(inputValue)
        } else {
            setNote(inputValue)
        }
    }

    const handleFormSubmit = e => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault()
        
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName("")
        setNote("")
        setEmail("")
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Name
                </label>
                <input
                value={userName}
                    type="text"
                    name="userName"
                    className="form-control"
                    onChange={handleInputChange}
                    id="exampleFormControlInput1"
                    placeholder="name"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                value={email}
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleInputChange}
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Notes
                </label>
                <textarea
                value={note}
                    className="form-control"
                    onChange={handleInputChange}
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
