import React from 'react'

import './NotFound.css'

function NotFound({ match }) {
    return (
        <div id="NotFound" className="flex flex-center">
            <h1>{match.url} not Found</h1>
        </div>
    )
}

export default NotFound