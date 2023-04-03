import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { format } from "date-fns"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from "./components/PostPage"
import About from "./components/About"
import Missing from "./components/Missing"

const App = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "My First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 2,
            title: "My 2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 3,
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 4,
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
    ])
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const filteredResults = posts.filter(post => 
            ((post.body).toLowerCase().includes(search.toLowerCase()))
            || ((post.title).toLowerCase().includes(search.toLowerCase()))
        )

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    const handleSubmit = (e) => {
        e.preventDefault()

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const datetime = format(new Date(), "MMMM dd, yyyy pp")
        const newPost = { id, title: postTitle, datetime, body: postBody }
        const allPosts = [ ...posts, newPost ]
        
        setPosts(allPosts)
        setPostTitle("")
        setPostBody("")
        navigate("/")
    }

    const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id)
        setPosts(postsList)

        navigate("/")
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