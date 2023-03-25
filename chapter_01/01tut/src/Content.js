import React from 'react'
import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState("Dave")
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ["Dave", "Bob", "Earl", "Kevin"]
        const int = Math.floor(Math.random() * 4)

        // return names[int]
        setName(names[int])
    }

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleClick2 = (name) => {
        console.log(`${name} has clicked the button`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
    
    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {name}!</p>

            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() => handleClick2(handleNameChange())}>Click Button</button>
            <button onClick={(e) => handleClick3(e)}>Click Button</button>
            <button onClick={handleClick}>Click Button Count</button>
        </main> 
    )
}

export default Content