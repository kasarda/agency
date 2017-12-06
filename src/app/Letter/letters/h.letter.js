import React from 'react'

export default (
    <g>
        <defs>
            <mask maskUnits="userSpaceOnUse" id="letter-shape-H">
                <g fill="#ffffff" >
                    <rect x="46" y="0" width="80" height="440" transform="matrix(1,0,0,1,0,0)">
                    </rect>
                    <rect x="124" y="187" width="194" height="80" transform="matrix(1,0,0,1,0,0)" style={{ opacity: 1 }}>
                    </rect>
                    <rect x="315" y="0" width="80" height="440" transform="matrix(1,0,0,1,0,0)">
                    </rect>
                </g>
            </mask>
        </defs>
        <g mask="url('#letter-shape-H')">
            <g fill="url('#dashed-pattern-H')">
                <polygon points="315,0,315,187,126,187,126,0,46,0,46,440,126,440,126,267,315,267,315,440,395,440,395,0">
                </polygon>
            </g>
            <g fill="#ffffff" mask="url('#background-mask-H')">
                <polygon points="315,0,315,187,126,187,126,0,46,0,46,440,126,440,126,267,315,267,315,440,395,440,395,0">
                </polygon>
            </g>
        </g>
    </g>
)