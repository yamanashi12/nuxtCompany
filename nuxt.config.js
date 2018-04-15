const resourceVersion = '1.0.0'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '求苗_体育赛事_体育门票_体育培训_体育赞助_体育消费服务平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '体育,求苗,体育赛事,体育培训,体育门票,体育报名,体育资讯,体育视频' },
      { hid: 'description', name: 'description', content: '求苗体育聚集各类体育产业IP，包含但不限于体育赛事报名、体育票务、体育培训、体育旅游、体育赞助、体育用品等各大板块，实现多种资源的聚合与互通的体育消费和资源服务互联网体育交易平台。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    { src: '~styles/styles.scss', lang: 'scss' },
    '~/styles/fonts/ionicons/css/ionicons.css'
  ],
  modules: [
    'bootstrap-vue/nuxt'
    // ['bootstrap-vue/nuxt', { css: false }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const sassResourcesLoader = {  
        loader: 'sass-resources-loader',  
        options: {  
          resources: [  
           'styles/styles.scss',
           'styles/var.scss'
          ]  
        }  
      }  
      // 遍历nuxt定义的loader配置，向里面添加新的配置。  
      config.module.rules.forEach((rule) => {  
        if (rule.test.toString() === '/\\.vue$/') {  
          rule.options.loaders.sass.push(sassResourcesLoader)  
          rule.options.loaders.scss.push(sassResourcesLoader)  
        }  
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {  
          rule.use.push(sassResourcesLoader)  
        }  
      })
    }
  }
}
