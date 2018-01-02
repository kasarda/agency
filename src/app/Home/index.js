import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Letter from '../Letter'
import Side from '../Side'
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
            length: 4,
            sideReady: false,
            ready: false,
            down: undefined,
            from: undefined,
            redirect: false,
            canRedirect: false,
            onFakeScroll: this.onFakeScroll.bind(this),
            onTouchStart: this.onTouchStart.bind(this),
            startPos: null
        }
    }


    toPage(newPage) {
        const { to, ready } = this.state

        if (ready && to !== newPage) {
            this.setState({
                ready: false,
                sideReady: false,
                to: newPage,
                from: to,
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
                    down: true
                })
            }

            else if (type === 'prev' && to > 0) {
                const prevPage = to - 1
                this.setState({
                    to: prevPage,
                    from: to,
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
        console.log('skya ku ku du du du dum pum pum')

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

    onTouchStart({ touches }) {
        console.log('start touching my ass')
        this.setState({
            startPos: touches[0].clientY
        })
    }


    componentDidMount() {
        const { onFakeScroll, onTouchStart } = this.state
        document.body.dataset.preventTouch = "true"


        if ('onwheel' in document)
            document.addEventListener('wheel', onFakeScroll, false)
        else {
            document.addEventListener('mousewheel', onFakeScroll, false)
            document.addEventListener('DOMMouseScroll', onFakeScroll, false)
        }

        document.addEventListener('touchstart', onTouchStart, false)
        document.addEventListener('touchend', onFakeScroll, false)

    }

    componentWillUnmount() {
        const { onFakeScroll, onTouchStart } = this.state
        document.body.dataset.preventTouch = "false"

        document.removeEventListener('wheel', onFakeScroll)
        document.removeEventListener('mousewheel', onFakeScroll)
        document.removeEventListener('DOMMouseScroll', onFakeScroll)
        document.removeEventListener('touchstart', onTouchStart)
        document.removeEventListener('touchend', onFakeScroll)
    }

    render() {
        const {
            to, down, from,
            sideReady, ready,
            renderPage, currentPage, renderImage,
            redirect, canRedirect, link
        } = this.state

        const url = renderImage > 0 ? `url(${require(`../../images/project${renderImage}.jpg`)})` : null

        if (canRedirect)
            return <Redirect to={link} />

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
                                style={{ backgroundImage: url }}>
                            </div>
                        </div>
                        <h1>
                            <span className="block">Digital</span>
                            <span className="block">Creative Agency</span>
                        </h1>
                    </div>
                </div>

                <Navigator onPage={id => this.toPage(id)} currentPage={currentPage} />
            </div>
        )
    }
}

export default Home