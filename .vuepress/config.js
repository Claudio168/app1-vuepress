module.exports = {
  path: path.resolve(__dirname, 'dist/index.html'),
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },//Home es lo que se pinta en el navbar 
      { text: 'Guide', link: '/guia/' },//Guide es lo que se pinta en el navbar y guia hace referencia a la carpeta creada
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