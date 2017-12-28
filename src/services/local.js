import { HashRouter, BrowserRouter } from 'react-router-dom'

const local = false
const prod = process.env.NODE_ENV === 'producation'


export const path = name => local ? '.' + name : name
export const baseName = prod ? 'agency/build' : '/'
export const RouterType = local ? HashRouter : BrowserRouter