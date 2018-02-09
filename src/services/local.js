import { HashRouter, BrowserRouter } from 'react-router-dom'

const local = false
const dev = process.env.NODE_ENV === 'development'


export const path = name => local ? '.' + name : name
export const baseName = local ? '/' : dev ? '/' : 'agency/build'
export const RouterType = local ? HashRouter : BrowserRouter
export const isPath = name => {
    const pathName = local ? window.location.hash.replace('#', '') : window.location.pathname.replace(/^(\/agency\/build)/, '')
    return pathName === name
}