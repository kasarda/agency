import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { image, text, setTitle } from '../../services/common'
import { getConfig, getPageById } from '../../services/pages'
import Letter from '../Letter'
import Side from '../Side'
import Wheel from '../Wheel'
import Navigator from '../Navigator'
import './Home.css'

class Home extends Component {

    constructor() {
        super()

        this.state = {
            to: 0,
            currentPage: 0,
            renderPage: 0,
            renderImage: 0,
            length: getConfig().length,
            sideReady: false,
            ready: false,
            down: undefined,
            from: undefined,
            fromLast: undefined,
            redirect: false,
            canRedirect: false,
            onFakeScroll: this.onFakeScroll.bind(this),
            onTouchStart: this.onTouchStart.bind(this),
            onArrow: this.onArrow.bind(this),
            startPos: null
        }
    }

    toPage(newPage) {
        const { to, ready, length } = this.state

        if (ready && to !== newPage) {
            this.setState({
                ready: false,
                sideReady: false,
                to: newPage,
                from: to,
                fromLast: to === length,
                down: !(to > newPage)
            })
        }
    }

    setPage(type) {
        const { to, length, ready } = this.state

        if (ready) {
            if (!(to === 0 && type === 'prev')) {
                this.setState({
                    sideReady: false,
                    ready: false
                })
            }

            if (type === 'next') {
                const nextPage = to + 1
                const newPage = nextPage <= length ? nextPage : 0
                this.setState({
                    to: newPage,
                    from: to,
                    fromLast: to === length,
                    down: true
                })
            }

            else if (type === 'prev' && to > 0) {
                const prevPage = to - 1
                this.setState({
                    to: prevPage,
                    from: to,
                    fromLast: false,
                    down: false
                })
            }
        }
    }

    animationEnd({ animationName }) {
        const { to } = this.state

        if (/-SideReady/.test(animationName))
            this.setState({ sideReady: true })

        if (/-Ready/.test(animationName))
            this.setState({ ready: true, currentPage: to })

        if (/-RenderPage/.test(animationName))
            this.setState({ renderPage: to })

        if (/-RenderImage/.test(animationName))
            this.setState({ renderImage: to })

        if (/-Redirect/.test(animationName))
            this.setState({ canRedirect: true })
    }

    animationStart({ animationName }) {
        const { to } = this.state

        if (/-StartRender/.test(animationName))
            this.setState({ renderPage: to })
    }

    onCanRedirect(link) {
        this.setState({ redirect: true, link })
    }

    shouldComponentUpdate(_, { to, renderImage }) {
        if (renderImage === 0 && to !== 0)
            this.setState({ renderImage: to })

        return true
    }

    onFakeScroll({ type, changedTouches, deltaY, detail, wheelDelta }) {
        let wheelDown,
            wheelOffset

        const touch = type === 'touchend'

        if (touch) {
            const { startPos } = this.state
            const end = changedTouches[0].clientY
            wheelDown = startPos > end ? false : true
            wheelOffset = Math.abs(startPos - end)

            this.setState({
                startPos: null
            })
        }

        else {
            if (type === 'wheel') {
                if (deltaY < 0)
                    wheelDown = false
                else if (deltaY > 0)
                    wheelDown = true
            }

            else {
                wheelDown = !Math.max(0, Math.min(1, (wheelDelta || -detail)))
            }

            wheelOffset = Math.abs(wheelDelta || (detail * -40))
        }


        const minOffset = wheelOffset >= 50

        if (
            (touch && !wheelDown && minOffset) ||
            (!touch && wheelDown)
        ) {
            this.setPage('next')
        }
        else if (
            (touch && wheelDown && minOffset) ||
            (!touch && !wheelDown)
        ) {
            this.setPage('prev')
        }

    }
    onArrow({ keyCode }) {
        if(keyCode === 39)
            this.setPage('next')

        if(keyCode === 37)
            this.setPage('prev')
    }

    onTouchStart({ touches }) {
        this.setState({
            startPos: touches[0].clientY
        })
    }

    componentWillReceiveProps({ toHomePage }) {
        if (toHomePage){
            this.toPage(0)
            this.props.onHomePageTriggered()
        }
    }

    componentDidMount() {
        const { onFakeScroll, onTouchStart, onArrow } = this.state
        document.body.dataset.preventTouch = "true"

        if ('onwheel' in document)
            document.addEventListener('wheel', onFakeScroll, false)
        else {
            document.addEventListener('mousewheel', onFakeScroll, false)
            document.addEventListener('DOMMouseScroll', onFakeScroll, false)
        }

        document.addEventListener('touchstart', onTouchStart, false)
        document.addEventListener('touchend', onFakeScroll, false)
        document.addEventListener('keydown', onArrow, false)

    }

    componentWillUnmount() {
        const { onFakeScroll, onTouchStart, onArrow } = this.state
        document.body.dataset.preventTouch = "false"

        document.removeEventListener('wheel', onFakeScroll)
        document.removeEventListener('mousewheel', onFakeScroll)
        document.removeEventListener('DOMMouseScroll', onFakeScroll)
        document.removeEventListener('touchstart', onTouchStart)
        document.removeEventListener('touchend', onFakeScroll)
        document.removeEventListener('keydown', onArrow)

    }

    render() {
        setTitle('Digital Agency')
        const {
            to, down, from, fromLast,
            sideReady, ready,
            renderPage, currentPage, renderImage,
            redirect, canRedirect, link
        } = this.state

        const { fallbackTheme } = getPageById(renderImage || 1)

        const url = renderImage > 0 ? image(`project${renderImage}.jpg`, true) : null

        if (canRedirect)
            return <Redirect push to={{
                pathname: link,
                state: {
                    redirected: true
                }
            }} />

        return (
            <div
                id="Home" className="view"
                data-home={to === 0}
                data-down={down}
                data-side-ready={sideReady}
                data-ready={ready}
                data-from={from}
                data-to={to}
                data-redirect={redirect}
                data-current-page={currentPage}
                data-from-last={fromLast}
                onAnimationEnd={this.animationEnd.bind(this)}
                onAnimationStart={this.animationStart.bind(this)}
            >
                <Side renderPage={renderPage} onCanRedirect={this.onCanRedirect.bind(this)} />
                <Letter letter="C" id="Letter" />

                <div className="camera flex direction-col justify-end">
                    <div className="column flex">
                        <div className="rule">
                            <div
                                className="background"
                                style={{ backgroundImage: url, backgroundColor: fallbackTheme }}>
                            </div>
                        </div>
                        <h1>
                            <span className="block">{text('Digital', 'Digitálna')}</span>
                            <span className="block">{text('Creative Agency', 'Kreatívna Agentúra')}</span>
                        </h1>
                    </div>
                </div>

                <Wheel />
                <Navigator onPage={id => this.toPage(id)} currentPage={currentPage} />
            </div>
        )
    }
}

export default Home