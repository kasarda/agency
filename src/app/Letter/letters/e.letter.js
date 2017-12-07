import React from 'react'

export default () => (
    <g>
        <defs>
            <mask
                maskUnits="userSpaceOnUse"
                id="letter-shape-E"
            >
                <g
                    style={{ strokeWidth: 80 }}
                    className="stroke-light-color"
                >
                    <path d="M99,2v436"></path>
                    <path d="M99,218h240"></path>
                    <path d="M99,42h281"></path>
                    <path d="M99,398h281"></path>
                </g>
            </mask>
        </defs>

        <g mask="url('#letter-shape-E')">
            <g fill="url('#dashed-pattern-E')">
                <polygon points="380,82,380,2,139,2,99,2,59,2,59,438,99,438,139,438,380,438,380,358,139,358,139,258,351,258,351,178,139,178,139,82"></polygon>
            </g>
            <g className="fill-light-color" mask="url('#background-mask-E')">
                <polygon points="380,82,380,2,139,2,99,2,59,2,59,438,99,438,139,438,380,438,380,358,139,358,139,258,351,258,351,178,139,178,139,82"></polygon>
            </g>
        </g>
    </g>
)