export function onFakeScroll({ type, changedTouches, deltaY, detail, wheelDelta }) {
    let wheelDown,
        wheelOffset,
        wheelLeft,
        wheelOffsetLeft

    const touch = type === 'touchend'

    if (touch) {
        const { startPosY, startPosX } = this.state
        const end = changedTouches[0].clientY
        const endX = changedTouches[0].clientX
        wheelDown = startPosY > end ? false : true
        wheelOffset = Math.abs(startPosY - end)
        wheelLeft = startPosX < endX ? false : true
        wheelOffsetLeft = Math.abs(startPosX - endX)
        this.setState({
            startPosY: null,
            startPosX: null
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


    const minOffsetY = wheelOffset >= 50
    const minOffsetX = wheelOffsetLeft >= 50
    if (
        (touch && !wheelDown && minOffsetY) ||
        (touch && !wheelLeft && minOffsetX) ||
        (!touch && wheelDown)
    ) {
        this.setPage('next')
    }
    else if (
        (touch && wheelDown && minOffsetY) ||
        (touch && wheelLeft && minOffsetX) ||
        (!touch && !wheelDown)
    ) {
        this.setPage('prev')
    }

}

export function onArrow({ keyCode }) {
    if (keyCode === 39 || keyCode === 40)
        this.setPage('next')

    if (keyCode === 37 || keyCode === 38)
        this.setPage('prev')
}

export function onTouchStart({ touches }) {
    this.setState({
        startPosY: touches[0].clientY,
        startPosX: touches[0].clientX
    })
}