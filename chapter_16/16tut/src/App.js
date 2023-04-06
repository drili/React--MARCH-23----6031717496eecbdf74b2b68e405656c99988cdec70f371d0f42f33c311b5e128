import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import api from "./api/posts"

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
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [editTitle, setEditTitle] = useState("")
    const [editBody, setEditBody] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts")
                setPosts(response.data)
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else {
                    console.log(`Error: ${error.message}`)
                }
            }
        }

        fetchPosts()
    }, [])

    useEffect(() => {
        const filteredResults = posts.filter(post => 
            ((post.body).toLowerCase().includes(search.toLowerCase()))
            || ((post.title).toLowerCase().includes(search.toLowerCase()))
        )

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const datetime = format(new Date(), "MMMM dd, yyyy pp")
        const newPost = { id, title: postTitle, datetime, body: postBody }

        try {
            const response = await api.post("/posts", newPost)
            const allPosts = [ ...posts, response.data ]
        
            setPosts(allPosts)
            setPostTitle("")
            setPostBody("")
            navigate("/")
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), "MMMM dd, yyyy pp")
        const updatedPost = { id, title: editTitle, datetime, body: editBody }

        try {
            const response = await api.put(`/posts/${id}`, updatedPost)
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
            setEditTitle("")
            setEditBody("")
            navigate("/")
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`)

            const postsList = posts.filter(post => post.id !== id)
            setPosts(postsList)

            navigate("/")
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    return (
        <div className='App'>
            <Header title="React JS Blog"></Header>
            <Nav search={search} setSearch={setSearch}></Nav>

            <Routes>
                <Route exact path="/" element={<Home posts={searchResults}></Home>}>
                </Route>

                <Route exact path="/post" element={
                    <NewPost 
                        handleSubmit={handleSubmit} 
                        postTitle={postTitle} 
                        setPostTitle={setPostTitle}
                        postBody={postBody} 
                        setPostBody={setPostBody}
                    >
                    </NewPost>
                }>
                </Route>

                <Route exact path="/edit/:id" element={
                    <EditPost 
                        posts={posts}
                        handleEdit={handleEdit} 
                        editTitle={editTitle} 
                        setEditTitle={setEditTitle}
                        editBody={editBody} 
                        setEditBody={setEditBody}
                    >
                    </EditPost>
                }>
                </Route>

                <Route exact path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}></PostPage>}>
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