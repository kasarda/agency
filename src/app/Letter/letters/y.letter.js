import React from 'react'

export default () => (
    <g>
        <defs>
            <mask
                maskUnits="userSpaceOnUse"
                id="letter-shape-Y"
            >
                <g className="fill-light-color">
                    <rect
                        x="0" y="0"
                        width="440" height="440"
                    ></rect>
                </g>
            </mask>
        </defs>
        <g mask="url('#letter-shape-Y')">
            <g fill="url('#dashed-pattern-Y')">
                <polygon points="317,0,220.9,202.8,219.5,202.8,219.1,202.8,123,0,28.3,0,176,281.2,176,440,219.5,440,260,440,260,285.2,411.7,0"></polygon>
            </g>
            <g fill="#ffffff" mask="url('#background-mask-Y')">
                <polygon points="317,0,220.9,202.8,219.5,202.8,219.1,202.8,123,0,28.3,0,176,281.2,176,440,219.5,440,260,440,260,285.2,411.7,0"></polygon>
            </g>
        </g>
    </g>
)