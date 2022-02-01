import React, { memo } from 'react'

const Small = memo(({ value }) => {
    console.log('Me volví a renderizar')
    return (
        <div>
            <small>{value}</small>
        </div>
    )
})

export default Small
