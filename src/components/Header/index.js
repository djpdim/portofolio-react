import React, { Component } from "react"
import { HashRouter, Redirect, Route } from "react-router-dom"
import About from "../../components/About"
import Contact from "../../components/Contact"
import Navigation from "../../components/Navigation"
import Portfolio from "../../components/Portfolio"
import Resume from "../../components/Resume"

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        )
    }
}

export default Header
