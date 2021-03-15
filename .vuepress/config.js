module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guia/' },
      { text: 'About', link: '/about/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/guia/':[
        '',//esto es para que aparesca la vista principal en el sidebar
        'nuevaguia',
        'otraguia'
      ]
    }

  }
}