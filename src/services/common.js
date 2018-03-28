import { path } from './local'
import React from 'react'

export const activeInWrapper = () => {
    const wrapper = document.querySelector('[data-active-navigation]')
    const position = document.documentElement.scrollTop || document.body.scrollTop

    if (wrapper) {
        const elements = document.querySelectorAll('#Language, #Navigation')

        elements.forEach(element => {
            const { height } = wrapper.getBoundingClientRect()

            const wrapperView = wrapper.offsetTop + height
            const elementView = element.offsetTop + position

            if (elementView > wrapperView)
                element.classList.add('dark-color')
            else
                element.classList.remove('dark-color')
        })
    }
}

export const setScrollablePage = () => {
    document.body.style.overflowY = 'visible'
    document.documentElement.style.height = 'auto'
    activeInWrapper()
}

export const resetToDefaultPage = () => {
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'
    document.documentElement.style.height = '100%'
    document.querySelector('#Navigation').classList.remove('dark-color')
    document.querySelector('#Language').classList.remove('dark-color')
}

export const image = (name, css = false) => {
    const url = path(require(`../images/${name}`))
    return css ? `url(${url})` : url
}

const storageLang = window.localStorage.getItem('lang')
export const getLang = () => storageLang ? storageLang : (window.navigator.language.includes('sk') ? 'sk' : 'en')

export const text = (primary, secondary, onlyText) => {
    const content = document.documentElement.lang === 'sk' ? secondary : primary
    if (onlyText)
        return content

    return <span className="language-item">{content}</span>
}


export const setTitle = (primary, secondary) => {
    if (secondary)
        document.title = text(primary, secondary, true)
    else
        document.title = primary
}

const preloaded = []
export const preload = (id, ...images) => {
    const isPreloaded = Boolean(preloaded.filter(v => v === id).length)
    if (!isPreloaded) {

        images.forEach(image => {
            const link = document.createElement('link')
            link.href = path(require('../images/' + image))
            link.rel = 'preload'
            link.as = 'image'
            document.head.appendChild(link)
        })

        preloaded.push(id)
    }

}


let prevented = false
export const preventTouch = prevent => prevented = prevent
export const isPreventTouch = () => prevented