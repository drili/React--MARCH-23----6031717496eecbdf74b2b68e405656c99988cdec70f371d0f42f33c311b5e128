import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Dave", "Bob", "Earl", "Kevin"]
        const int = Math.floor(Math.random() * 4)

        return names[int]
    }
    
    return (
        <main>
            <p>Hello {handleNameChange()}!</p>
        </main>
    )
}

export default Content