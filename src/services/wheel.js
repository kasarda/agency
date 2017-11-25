export default cb => {
    document.addEventListener('mousewheel', listener)
    document.addEventListener('DOMMouseScroll', listener)

    function listener(event) {
        event.wheelDown = !Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)))
        cb.call(this, event)
    }
}