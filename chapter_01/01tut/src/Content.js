import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                ></ItemList>
            ) : (
                <p style={{ marginTop: "0rem" }}>No items found!</p>
            )}
        </>
    )
}

export default Content