import React from 'react'

import './Letter.css'

function Letter({ id, letter }) {

    const mask = letter === 'C' ? 'url(\'#letter-shape-C\')' : null

    return (
        <svg
            viewBox="0 0 440 440"
            preserveAspectRatio="none"
            className="Letter"
            id={id}
            data-letter={letter}
        >
            <defs>
                <pattern
                    viewBox="0 0 8 8"
                    x="0" y="0"
                    width="8" height="8"
                    patternUnits="userSpaceOnUse"
                    id={`dashed-pattern-${letter}`}
                >
                    <path
                        style={{ opacity: 0.5 }}
                        className="fill-pattern"
                        d="M1.6,5.6l4.1-4.1C6,1.2,6.3,1,6.8,1.5C7.2,1.9,7,2.3,6.7,2.6L2.6,6.7C2.2,7,1.9,7.1,1.5,6.7C1.1,6.3,1.3,5.9,1.6,5.6z">
                    </path>

                </pattern>

                <mask
                    maskUnits="userSpaceOnUse"
                    style={{ shapeRendering: "crispEdges" }}
                    id={`background-mask-${letter}`}
                >

                    <rect
                        x="0" y="0"
                        width="220" height="440"
                        className="fill-light-color"
                        transform="matrix(1,0,0,1,220,0)"></rect>
                    <rect
                        x="220" y="0"
                        width="240" height="440"
                        transform="matrix(1,0,0,1,0,0)"
                        className="fill-light-color background-mask-rect"></rect>
                </mask>

                <mask
                    maskUnits="userSpaceOnUse"
                    id="letter-shape-C">
                    <g
                        className="stroke-light-color"
                        style={{ strokeWidth: 80, opacity: 1 }}>
                        <path
                            className="shape"
                            d="M364.575874,112.753201 C331.772822,68.6049929 279.226938,40 220,40 C120.588745,40 40,120.588745 40,220 C40,319.411255 120.588745,400 220,400 L220,400 C279.2513,400 331.816049,371.37147 364.616343,327.192313"></path>
                    </g>
                </mask>

            </defs>


            <g mask={mask}>
                <g fill={`url('#dashed-pattern-${letter}')`}>
                    <use xlinkHref={`#letter-${letter}`} />
                </g>
                <g className="fill-light-color" mask={`url('#background-mask-${letter}')`}>
                    <use xlinkHref={`#letter-${letter}`} />
                </g>
            </g>

        </svg>
    )
}

export default Letter