import inView from './view'

export function scrollAnimation() {
    const targets = document.querySelectorAll('[data-animate]')
    const { matches } = window.matchMedia('(min-width: 768px)')

    if (targets.length > 0 && matches) {
        targets.forEach(target => {

            const offset = parseFloat(target.dataset.offset) || 0

            const visible = inView({
                target,
                offset: {
                    top: offset,
                    bottom: offset
                },
                direction: 'end'
            })

            if (visible)
                target.classList.add('animate-active')

        })
    }
}

export function resetScrollAnimation() {
    const targets = document.querySelectorAll('[data-animate]')
    targets.forEach(target => target.classList.remove('animate-active'))
}