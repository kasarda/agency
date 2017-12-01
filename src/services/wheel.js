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
    let wheelEvent
    if ('onwheel' in document)
        wheelEvent = 'onwheel'
    else if ('onmousewheel' in document)
        wheelEvent = 'onmousewheel'

    if (wheelEvent)
        document[wheelEvent] = listener
    else
        document.addEventListener('DOMMouseScroll', listener)

    function listener(event) {
        event.wheelDown = !Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)))
        event.wheelOffset = Math.abs(event.wheelDelta || (event.detail * -40))
        cb.call(this, event)
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
    document.onwheel = null
    document.onmousewheel = null
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
            (event.type !== 'touchend' && event.wheelDown && minOffset)
        ) {
            down && down.call(this, event)
        }
        else if (
            (event.type === 'touchend' && event.wheelDown && minOffset) ||
            (event.type !== 'touchend' && !event.wheelDown && minOffset)
        ) {
            up && up.call(this, event)
        }

        always && always.call(this, event)
    })
}
