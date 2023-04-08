import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Home = () => {
    const { searchResults, fetchError, isLoading } = useContext(DataContext)

    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}

            {!isLoading && !fetchError && (searchResults.length
                ? <Feed posts={searchResults}></Feed>
                : <p className='statusMsg'>No posts found...</p>)
            }

            {/* {posts.length ? (
                <Feed posts={posts}></Feed>
            ) : (
                <p style={{ marginTop: "2rem" }}>No posts found...</p>
            )} */}
        </main>
    )
}

export default Home