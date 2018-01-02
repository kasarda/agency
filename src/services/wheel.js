/**
 *
 * Wheel cross platform event with touch devices fallback
 * On touch devices you just move finger
 * On mouse devices you just wheel with mouse wheel
 *
 * Inside event object will be added wheelDown and wheelOffset property
 *
 * onMouseWheel(event => {
 *
 *      event.type
 *      event.wheelDown
 *      event.wheelOffset
 * })
 */

export const fakeScroll = cb => {

    // for mouse devices

    if ('onwheel' in document) {
        document.onwheel = listener
    }

    else {
        document.addEventListener('mousewheel', listener, false)
        document.addEventListener('DOMMouseScroll', listener, false)
    }

    function listener(event) {
        if (!event.ctrlKey) {
            if (event.type === 'wheel') {
                if (event.deltaY < 0)
                    event.wheelDown = false
                else if (event.deltaY > 0)
                    event.wheelDown = true
            }

            else {
                event.wheelDown = !Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)))
            }

            event.wheelOffset = Math.abs(event.wheelDelta || (event.detail * -40))

            cb.call(this, event)
        }
    }

    // for touch devices
    let start
    document.ontouchstart = startEvent => {
        start = startEvent.touches[0].clientY
    }

    document.ontouchend = event => {
        const end = event.changedTouches[0].clientY
        event.wheelOffset = Math.abs(start - end)
        event.wheelDown = start > end ? false : true
        cb.call(this, event)
        start = null
    }

}

export const resetScrollEvents = () => {
    if ('onwheel' in document) {
        document.onwheel = null
    }
    document.ontouchstart = null
    document.ontouchend = null
}

/**
 *
 * Trigger callback when user trigger fake scroll event
 * @param {number} offset
 * @param {Function} down
 * @param {Function} up
 * @param {Function} always
 * @return {undefined}
 *
 */
export const onFakeScroll = (offset, down, up, always) => {
    fakeScroll(function (event) {
        const minOffset = event.wheelOffset >= offset

        if (
            (event.type === 'touchend' && !event.wheelDown && minOffset) ||
            (event.type !== 'touchend' && event.wheelDown)
        ) {
            down && down.call(this, event)
        }
        else if (
            (event.type === 'touchend' && event.wheelDown && minOffset) ||
            (event.type !== 'touchend' && !event.wheelDown)
        ) {
            up && up.call(this, event)
        }

        always && always.call(this, event)
    })
}
