import React from 'react'
import Feed from './Feed'

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'>Loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red" }}>{fetchError}</p>}

            {!isLoading && !fetchError && (posts.length
                ? <Feed posts={posts}></Feed>
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