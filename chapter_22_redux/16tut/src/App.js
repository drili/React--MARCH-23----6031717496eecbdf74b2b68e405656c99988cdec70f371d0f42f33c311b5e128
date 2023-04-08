import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import useAxiosFetch from './hooks/useAxiosFetch'

import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from "./components/PostPage"
import About from "./components/About"
import Missing from "./components/Missing"
import EditPost from './components/EditPost'

const App = () => {
    const setPosts = useStoreActions((actions) => actions.setPosts)
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data, setPosts])

    return (
        <div className='App'>
            <Header title="React JS Blog"></Header>
            
                <Nav></Nav>

                <Routes>
                    <Route exact path="/" element={<Home
                        isLoading={isLoading}
                        fetchError={fetchError}
                    ></Home>}>
                    </Route>

                    <Route exact path="/post" element={<NewPost></NewPost>}>
                    </Route>

                    <Route exact path="/edit/:id" element={<EditPost></EditPost>}>
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