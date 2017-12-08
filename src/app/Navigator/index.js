import React from 'react'

import './Navigator.css'

class Navigator extends React.Component {
    componentDidMount() {


        //?Test
        /*
        setInterval(_ => {
            const index = Math.round(Math.random() * 4)
            const btn = this.refs[`btn-${index}`]
            if (this.props.ready && btn) {
                btn.click()
                console.log(`btn-${index} -> clicked`)
            }

        }, 1000)
        */
        //?End Test

    }
    render() {
        const { onPage, to } = this.props
        return (
            <div id="Navigator">
                <div className="links flex justify-between">
                    <div className={to === 0 ? 'active' : ''} onClick={_ => onPage(0)}>
                        <span>C</span>
                    </div>
                    <div className={to === 1 ? 'active' : ''} onClick={_ => onPage(1)}>
                        <span>E</span>
                    </div>
                    <div className={to === 2 ? 'active' : ''} onClick={_ => onPage(2)}>
                        <span>Y</span>
                    </div>
                    <div className={to === 3 ? 'active' : ''} onClick={_ => onPage(3)}>
                        <span>H</span>
                    </div>
                    <div className={to === 4 ? 'active' : ''} onClick={_ => onPage(4)}>
                        <span>T</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigator