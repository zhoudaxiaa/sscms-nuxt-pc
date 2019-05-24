const pkg = require('./package')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    'normalize.css',
    '@/assets/scss/global.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/swiper', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // @nuxtjs/style-resources 插件，sass 全局导入变量和mixins
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    sass: [
      '@/assets/scss/vars.scss',
      '@/assets/scss/mixins.scss',
    ],
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      // 添加svg-sprite-loader配置
      config.module.rules.unshift({
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [resolve("assets/icons")],
        options: {
          symbolId: "icon-[name]"
        }
      })

      // 排除原来的图片svg的处理
      Object.assign(config.module.rules[12],{
        exclude: [resolve("assets/icons")],
      })

    }
  }
}
