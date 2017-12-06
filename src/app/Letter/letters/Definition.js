import React from 'react'

function Definition({letter}) {
    return (
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




        </defs>
    )
}
export default Definition