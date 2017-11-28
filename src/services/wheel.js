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

export default cb => {

    // for mouse devices
    document.addEventListener('mousewheel', listener)
    document.addEventListener('DOMMouseScroll', listener)

    function listener(event) {
        event.wheelDown = !Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)))
        event.wheelOffset = Math.abs(event.wheelDelta || (event.detail * -40))
        cb.call(this, event)
    }

    // for touch devices
    let start
    document.addEventListener('touchstart', startEvent => {
        start = startEvent.touches[0].clientY
    })

    document.addEventListener('touchend', event => {
        const end = event.changedTouches[0].clientY
        event.wheelOffset = Math.abs(start - end)
        event.wheelDown = start > end ? false : true
        cb.call(this, event)
        start = null
    })


}


