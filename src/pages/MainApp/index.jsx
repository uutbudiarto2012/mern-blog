import React from 'react'
import './main-app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import { Home, CreateBlog, DetailBlog } from '../../pages'

const MainApp = () => {
    return (
        <div className="main-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>
            <div className="main-content">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/detail">
                            <DetailBlog />
                        </Route>
                        <Route path="/create">
                            <CreateBlog />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
