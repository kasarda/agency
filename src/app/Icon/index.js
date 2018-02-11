import React from 'react'

function Icon({ name, light, className, width = 18, height = 18, onClick }) {

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" className={className} onClick={e => onClick && onClick(e)}>
            <use className={`icon ${light && 'fill-light-color'}`} xlinkHref={'#icon-' + name} />
        </svg>
    )
}

export default Icon
