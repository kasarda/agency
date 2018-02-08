import { path } from './local'

export default (...images) => {

    images.forEach(image => {
        const link = document.createElement('link')
        link.href = path(require('../images/'+image))
        link.rel = 'preload'
        link.as = 'image'
        document.head.appendChild(link)
    })

}