import { path } from './local'

export const setScrollablePage = () => {
    document.body.style.overflowY = 'visible'
    document.documentElement.style.height = 'auto'
}

export const resetToDefaultPage = () => {
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'
    document.documentElement.style.height = '100%'
    document.querySelector('#Navigation').classList.remove('black-color')
}

export const image = (name, css = false) => {
    const url = path(require(`../images/${name}`))
    return css ? `url(${url})` : url
}

const storageLang = window.localStorage.getItem('lang')
export const getLang = () =>  storageLang ? storageLang : (window.navigator.language.includes('sk') ? 'sk' : 'en')

export const text = (primary, seconadry) => document.documentElement.lang === 'sk' ? seconadry : primary

export const preload = (...images) => {

    images.forEach(image => {
        const link = document.createElement('link')
        link.href = path(require('../images/'+image))
        link.rel = 'preload'
        link.as = 'image'
        document.head.appendChild(link)
    })

}