import inView from './view'


export function scrollAnimation() {
    const targets = document.querySelectorAll('[data-animate]')

    if (targets.length > 0 && window.innerWidth >= 768) {
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