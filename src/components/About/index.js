import React from "react"
// import images from assets
import { Col } from "react-bootstrap"
import myImage from "../../assets/images/Dimo.png"

function About() {
    return (
        <section className="title">
            <div className="row justify-content-center" id="about-container">
                <Col lg={6} md={12}>
                    <center>
                        <img src={myImage} className="my-image" alt="dimos-profile" />
                    </center>
                    <p class="name">Dimosthenis Pagkas</p>
                    <p class="job">full stack web developer</p>
                    <h2 class="education">a little about me</h2>
                    <p>
                        Hello, I'm Dimo! I switched my gears from my education in Business to take on Web Development to
                        keep challenging myself in ways I thought I never could. Web Development allows me to
                        continually create and creatively find new ways to make processes better. I always believed that
                        anything can be improved and there are different ways to solve problems.
                        <br></br>
                        <br></br>
                        With that being said, I am Full Stack Web Developer based in New York City with a 10+ years
                        professional experience in Business Administration in Finance. I am a naturally curious person
                        which makes me want to always learn new things. I am a problem-solver who questions everything.
                        I am a hard worker who doesn't take life too seriously and enjoys the little things. You will
                        always find a smile on my face.
                        <br></br>
                        <br></br>
                    </p>
                </Col>
            </div>
        </section>
    )
}

export default About
