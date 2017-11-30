import React from 'react'

import './Letter.css'

function Letter() {
    return (

        <svg
            viewBox="0 0 440 440"
            preserveAspectRatio="none"
            id="Letter"
        >
            <defs>
                <pattern
                    viewBox="0 0 8 8"
                    x="0" y="0"
                    width="8" height="8"
                    patternUnits="userSpaceOnUse"
                    id="dashed-pattern" className="fill-light-color">

                    <path
                        style={{ opacity: 0.5 }}
                        d="M1.6,5.6l4.1-4.1C6,1.2,6.3,1,6.8,1.5C7.2,1.9,7,2.3,6.7,2.6L2.6,6.7C2.2,7,1.9,7.1,1.5,6.7C1.1,6.3,1.3,5.9,1.6,5.6z">
                    </path>

                </pattern>


                <mask
                    maskUnits="userSpaceOnUse"
                    style={{ shapeRendering: "crispEdges" }}
                    id="background-mask">
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
                    id="letter-shape">
                    <g
                        className="stroke-light-color"
                        style={{ strokeWidth: 80, opacity: 1 }}>
                        <path
                            style={{ strokeDasharray: 901.397, strokeDashoffset: 0 }}
                            d="M364.575874,112.753201 C331.772822,68.6049929 279.226938,40 220,40 C120.588745,40 40,120.588745 40,220 C40,319.411255 120.588745,400 220,400 L220,400 C279.2513,400 331.816049,371.37147 364.616343,327.192313"></path>
                    </g>
                </mask>


            </defs>


            <g mask="url('#letter-shape')">
                <g fill="url('#dashed-pattern')">
                    <path d="M219.3,359.5C142.7,359.2,80.5,296.7,80.5,220c0-76.7,62.2-139.2,138.8-139.5c44.4,0.1,85.1,20.8,111.6,56.6l64.3-47.6c-20-27-46.3-49.4-76-64.7C288.7,9,254.4,0.7,219.8,0.5v0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0v0C160.6,0.8,105.9,23.6,64.7,64.8C23.3,106.3,0.5,161.4,0.5,220s22.8,113.7,64.2,155.2c41.2,41.2,95.9,64,154.1,64.3v0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0v0c34.5-0.2,68.7-8.5,99.2-24.2c29.7-15.3,56-37.6,76-64.5l-64.2-47.7C304.3,338.8,263.7,359.4,219.3,359.5z"></path>
                </g>
                <g
                    className="fill-light-color"
                    mask="url('#background-mask')">
                    <path d="M219.3,359.5C142.7,359.2,80.5,296.7,80.5,220c0-76.7,62.2-139.2,138.8-139.5c44.4,0.1,85.1,20.8,111.6,56.6l64.3-47.6c-20-27-46.3-49.4-76-64.7C288.7,9,254.4,0.7,219.8,0.5v0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0v0C160.6,0.8,105.9,23.6,64.7,64.8C23.3,106.3,0.5,161.4,0.5,220s22.8,113.7,64.2,155.2c41.2,41.2,95.9,64,154.1,64.3v0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0v0c34.5-0.2,68.7-8.5,99.2-24.2c29.7-15.3,56-37.6,76-64.5l-64.2-47.7C304.3,338.8,263.7,359.4,219.3,359.5z"></path>
                </g>
            </g>
        </svg>
    )
}

export default Letter