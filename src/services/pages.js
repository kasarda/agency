import { text } from './common'

export const getConfig = () => ([
    {
        id: 1,
        title: 'headphones',
        letter: 'H',
        theme: '#b29992',
        fallbackTheme: '#d2c7c3',
        description: [
            text('We created a fast E-shop', 'Vytvorili sme rýchly E-shop,'),
            text('which provide quality', 'ktorý ponúka kvalitné'),
            text('headphones and speakers.', 'slúchadlá a reproduktory.')
        ],
        paragraphs: [
            text(
                'We created a fast E-shop which provides headphones and speakers of great quality. The website includes beautiful landing pages for all products and also is fully responsive. The website uses notifications so you will know about new products really quickly.',
                'Vytvorili sme rýchly E-shop, ktorý ponúka kvalitné slúchadlá a reproduktory. Stránka obsahuje prekrásne Landing page pre všetky produkty a je plne responzívna. Stránka využíva notifikácie takže budete vedieť informácie o nových produktoch veľmi rýchlo.'
            ),

            text(
                'Our challenge was to create really fast website which will be working across all platforms and devices which are available to us. Our priority was user experience as always.',
                'Výzvou bolo vytvoriť veľmi rýchlu stránku, ktorá bude funkčná na každej platforme a zariadeniach, ktoré sú dostupné. Našou prioritou bolo ako vždy user experience.'
            ),

            text(
                'Design of the page was designed to be clear and loading of the page to be fast as possible and the landing pages was designed to be representing as much as possible the given product.',
                'Dizajn stránky bol navrhnutý aby bol jednoduchý a aby načítavanie stránky bolo čo najrýchlejšie a Landing pages boli navrhnuté aby reprezentovali daný produkt najviac ako môžu.'
            )
        ],
        link: '/projects/headphones',
        next: 'portfolio',
        prev: 'tradeley'
    },
    {
        id: 2,
        title: 'portfolio',
        letter: 'P',
        theme: '#a0978a',
        fallbackTheme: '#ddc6a6',
        description: [
            text('We created a portfolio', 'Vytvorili sme portfólio'),
            text('page for the designer', 'pre dizajnéra'),
            text('and the photographer.', 'a fotografa')
        ],
        paragraphs: [
            text(
                'We created a portfolio page for the designer and the photographer. The website includes dynamic gallery for photos and videos. The page is fully responsive and also it is progressive web application which means that page is like native application.',
                'Vytvorili sme portfólio pre dizajnéra a fotografa. Stránka obsahuje dynamickú galériu pre fotografie a videá. Stránka je plne responzívna a je taktiež progresívna webová aplikácia alias PWA, čo znamená že stránka sa správa ako natívna aplikácia. '
            ),

            text(
                'Our goal was to create portfolio page which will be progressive web app with gallery. The page uses parallax effects which can increase user experience.',
                'Naším cieľom bolo vytvoriť portfólio, ktoré bude PWA s dynamickou galériou. Stránka používa parallax efekty, ktoré zvyšujú user experience.'
            ),

            text(
                'The website wins couple of awards for example CSS Master awards, Site of the day on Awwwards and much more.',
                'Táto stránka vyhrala niekoľko ocenení ako CSS Master awards, Site of the day od Awwwards a mnoho ďalších.'
            )
        ],
        link: '/projects/portfolio',
        next: 'response',
        prev: 'headphones'
    },
    {
        id: 3,
        title: 'response',
        letter: 'R',
        theme: '#a9998e',
        fallbackTheme: '#6a4745',
        description: [
            text('We created a clever social', 'Vytvorili sme chytrú sociálnu'),
            text('network for sharing', 'sieť na zdieľanie príspevkov,'),
            text('posts, images or videos.', 'obrázkov a videí')
        ],
        paragraphs: [
            text(
                'We created a clever social network for sharing posts, images or videos. The website uses secure auth system and is able to post anonymous posts. It is fully responsive website.',
                'Vytvorili sme chytrú sociálnu sieť na zdieľanie príspevkov, obrázkov a videí. Stránka používa zabezpečený auth systém a je schopná posielať anonymné príspevky. Je to plne responzívna stránka.'
            ),
            text(
                'Our goals was to create secure social network for posting posts for group of people without caring about security. App is useful for school classes, work stuff or just friends group.',
                'Našim cieľom bolo vytvoriť bezpečnú sociálnu sieť na posielanie príspevkov pre skupinu ľudí. Aplikácia je užitočná pre školské triedy, zamestnancov alebo len pre partiu kamarátov.'
            ),
            text(
                'The website was designed to be very simple and clear where every post has its own space where you can write comments or like the post.',
                'Stránka bola navrhnutá aby bola veľmi jednoduchá kde každý príspevok bude mať svoje vlastné miesto kde môžete okomentovať alebo ohodnotiť príspevok.'
            )
        ],
        link: '/projects/response',
        next: 'tradeley',
        prev: 'portfolio'
    },
    {
        id: 4,
        title: 'tradeley',
        letter: 'T',
        theme: '#c1ab9e',
        fallbackTheme: '#d8cbbb',
        description: [
            text('We created business website', 'Vytvorili sme obchodnú stránku'),
            text('for architect company', 'pre architektonickú spoločnosť'),
            text('called Tradeley', 'nazývanú Tradeley')
        ],
        paragraphs: [
            text(
                'We created business website for architect company called Tradeley. It is fully responsive progressive web app with very fast loading of content.',
                'Vytvorili sme obchodnú stránku pre architektonickú spoločnosť nazývanú Tradeley. Je to plne responzívna PWA stránka s veľmi rýchlym načítaním.'
            ),
            text(
                'Our goal was to create modern portfolio for architecture company. We decided to create progressive web app to increase user experience and loading of the content.',
                'Našim cieľom bolo vytvoriť moderné portfólio pre túto spoločnosť. Rozhodli sme sa vytvoriť PWA aby sme zvýšili user experience a načítanie stránky.'
            ),
            text(
                'The website was designed to be very simple and clear without any noise in background so user can focus on content not on less important things.',
                'Stránka bola navrhnutá aby bola veľmi jednoduchá bez hluku v pozadí, takže sa užívateľ môže sústrediť na samotný obsah stránky nie na menej dôležité veci.'
            )
        ],
        link: '/projects/tradeley',
        next: 'headphones',
        prev: 'response'
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
            console.error(`[Services:Pages] -> property "${prop}" doesn't exist in the config object`)
    })

    return array
}