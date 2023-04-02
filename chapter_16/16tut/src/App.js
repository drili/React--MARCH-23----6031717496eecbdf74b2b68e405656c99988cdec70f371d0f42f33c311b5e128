import React from 'react'
import { BrowserRouter as Router, Route, Routes, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from "./components/PostPage"
import About from "./components/About"
import Missing from "./components/Missing"

const App = () => {
    return (
        <div className='App'>
            <Header></Header>
            <Nav></Nav>

            <Routes>
                <Route exact path="/" element={<Home></Home>}>
                </Route>

                <Route exact path="/post" element={<NewPost></NewPost>}>
                </Route>

                <Route exact path="/post/:id" element={<PostPage></PostPage>}>
                </Route>

                <Route exact path="/about" element={<About></About>}>
                </Route>

                <Route path="*" element={<Missing></Missing>}>
                </Route>
            </Routes>

            <Footer></Footer>
        </div>
    )
}

export default App