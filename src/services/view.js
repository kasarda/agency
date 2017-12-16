export default (element, offsetY = 0, offsetX = 0) => {
    const rect = element.getBoundingClientRect()
    const html = document.documentElement

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - rect.height - offsetY <= (window.innerHeight || html.clientHeight) &&
        rect.right - rect.width - offsetX <= (window.innerWidth || html.clientWidth)
    )
}