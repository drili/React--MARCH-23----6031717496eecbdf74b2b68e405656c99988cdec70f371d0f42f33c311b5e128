import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Dave", "Bob", "Earl", "Kevin"]
        const int = Math.floor(Math.random() * 4)

        return names[int]
    }

    const handleClick = () => {
        console.log("You clicked it!")
    }

    const handleClick2 = (name) => {
        console.log(`${name} has clicked the button`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
    
    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>

            <button onClick={handleClick}>Click Button</button>
            <button onClick={() => handleClick2(handleNameChange())}>Click Button</button>
            <button onClick={(e) => handleClick3(e)}>Click Button</button>
        </main>
    )
}

export default Content