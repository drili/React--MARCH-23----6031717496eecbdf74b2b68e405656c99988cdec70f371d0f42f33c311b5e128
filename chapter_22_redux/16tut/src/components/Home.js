import React from 'react'
import Feed from './Feed'
import { useStoreState } from 'easy-peasy'

const Home = ({ isLoading, fetchError }) => {
    const searchResults = useStoreState((state) => state.searchResults)

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