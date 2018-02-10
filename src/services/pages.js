import { text } from './common'

export const getConfig = () => ([
    {
        id: 1,
        title: 'headphones',
        letter: 'H',
        theme: '#b29992',
        description: [
            text('We created a fast E-shop', 'Vytvorily sme rýchly E-shop'),
            text('which provide quality', 'ktorý ponúka kvalitné'),
            text('headphones and speakers.', 'slúchadlá a reproduktory.')
        ],
        paragraphs: [
            'We created a fast E-shop which provides headphones and speakers of great quality. The website includes beautiful landing pages for all products and also is fully responsive. The website uses notifications so you will know about new products really quickly.',
            'Our challenge was to create really fast website which will be working across all platforms and devices which are available to us. Our priority was user experience as always.',
            'Design of the page was designed to be clear and loading of the page to be fast as possible and the landing pages was designed to be representing as much as possible the given product.'
        ],
        link: '/projects/headphones',
        next: 'portfolio',
        prev: 'artech'
    },
    {
        id: 2,
        title: 'portfolio',
        letter: 'R',
        theme: '#a0978a',
        description: [
            'We created a portfolio',
            'page for the designer',
            'and the photographer.'
        ],
        paragraphs: [
            'We created a portfolio page for the designer and the photographer. The website includes dynamic gallery for photos and videos. The page is fully responsive and also it is progressive web application which means that page is like native application.',
            'Our goal was to create portfolio page which will be progressive web app with gallery. The page uses parallax effects which can increase user experience.',
            'The website wins couple of awards for example CSS Master awards, Site of the day on Awwwards and much more.'
        ],
        link: '/projects/portfolio',
        next: 'post',
        prev: 'headphones'
    },
    {
        id: 3,
        title: 'post',
        letter: 'P',
        theme: '#a9998e',
        description: [
            'We created a clever social',
            'network for sharing',
            'posts, images or videos.'
        ],
        paragraphs: [
            'We created a clever social network for sharing posts, images or videos. The website uses secure auth system and is able to post anonymous posts. It is fully responsive website.',
            'Our goals was to create secure social network for posting posts for group of people without caring about security. App is useful for school classes, work stuff or just friends group.',
            'The website was designed to be very simple and clear where every post has its own space where you can write comments or like the post.'
        ],
        link: '/projects/post',
        next: 'artech',
        prev: 'portfolio'
    },
    {
        id: 4,
        title: 'artech',
        letter: 'T',
        theme: '#c1ab9e',
        description: [
            'We created business website',
            'for architect company',
            'called Artech'
        ],
        paragraphs: [
            'We created business website for architect company called Artech. It is fully responsive progressive web app with very fast loading of content.',
            'Our goal was to create modern portfolio for architecture company. We decided to create progressive web app to increase user experience and loading of the content.',
            'The website was designed to be very simple and clear without any noise in background so user can focus on content not on less important things.'
        ],
        link: '/projects/artech',
        next: 'headphones',
        prev: 'post'
    }
])



export const getPageById = id => {
    let obj
    getConfig().forEach(page => {
        if(page.id === parseFloat(id))
            obj = page
    })
    return obj
}

export const getPageByLink = link => {
    let obj
    getConfig().forEach(page => {
        if(page.link === link)
            obj = page
    })
    return obj
}

export const getListOf = prop => {
    const array = []
    getConfig().forEach(value => {
        if(prop in value)
            array.push(value[prop])
        else
            console.error(`[Services:Pages] -> property "${prop}" doesn't exist in object`)
    })


    return array
}