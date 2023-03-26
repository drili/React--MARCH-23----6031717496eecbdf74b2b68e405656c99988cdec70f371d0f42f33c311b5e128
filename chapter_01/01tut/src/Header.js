import React from 'react'

const Header = ({ title }) => {
    const headerStyle = {
        // backgroundColor: "mediumblue",
        // color: "#fff",
        // padding: "10px"
    }

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header