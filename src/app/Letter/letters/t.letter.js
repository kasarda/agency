import React from 'react'

export default () => (
    <g>
        <defs>
            <mask
                maskUnits="userSpaceOnUse"
                id="letter-shape-T"
            >
                <g
                    className="stroke-light-color"
                    style={{ strokeWidth: 80 }}
                >
                    <path d="M220,434 L220,0"></path>
                    <path d="M39,46 L220,46"></path>
                    <path d="M220,46 L401,46"></path>
                </g>
            </mask>
        </defs>
        <g mask="url('#letter-shape-T')">
            <g fill="url('#dashed-pattern-T')">
                <polygon points="401,6,401,86,260,86,260,434,180,434,180,86,39,86,39,6"></polygon>
            </g>
            <g className="fill-light-color" mask="url('#background-mask-T')">
                <polygon points="401,6,401,86,260,86,260,434,180,434,180,86,39,86,39,6"></polygon>
            </g>
        </g>
    </g>

)