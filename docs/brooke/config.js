const head = [
  ['link', {rel: 'icon', href: '/./images/logo.png'}]
]

// markdown 配置
const markdown = {
  // 是否开启行号
  lineNumbers: true
}

// gitee logo svg icon
import gitee from '.././images/gitee.txt'
import coding from '.././images/coding.txt'
import oschina from '.././images/oschina.txt'

// 社交链接
const socialLinks = [
  // 默认支持 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube'
  {icon: 'github', link: 'https://github.com/520wsl'},
  // 或者导入svg图片
  {icon: {svg: gitee}, link: 'https://gitee.com/maddragon'},
  {icon: {svg: coding}, link: 'https://maddragon.coding.net/user/projects'},
  {icon: {svg: oschina}, link: 'https://my.oschina.net/520wsl'},
]
// 页脚配置
const footer = {
  // 消息
  message: 'MIT Licensed',
  // 版权
  copyright: '版权声明：本中文文档内容版权为 <a href="https://github.com/520wsl" target="_black" >MadDragon</a> 所有，保留所有权利。'
}

// 上一个和下一个链接上方显示的文本
const docFooter = {
  prev: '徐大兵',
  next: 'https://xbrooke.cn'
}

// 顶部导航
const nav = [
  {text: '首页', link: '/'},
  {
      text: '案例1',
      activeMatch: '',
      items: [
          {
              text: '介绍',
              items: [
                  {text: '1', link: '/brooke/1'},
                  {text: '2', link: '/brooke/2'},
              ]
          },
          {
              text: '2',
              items: [
                  {text: '1', link: '/brooke/1'},
                  {text: '2', link: '/brooke/2'},
              ]
          },
      ]
  },
  {
      text: '案例2',
      activeMatch: '',
      items: [
          {text: '1', link: '/brooke2/1'},
          {text: '2', link: '/brooke2/2'},
      ]
  }
]

// 全局左侧菜单
const sidebar = {
  '': [
      {
          text: '案例1',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
              {text: '1-A', link: '/brooke/1'},
              {text: '1-B', link: '/brooke/2'},
              {text: '1-C', link: '/brooke/1'}
          ]
      },
      {
          text: '案例2',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
              {text: '2-A', link: '/brooke2/1'},
              {text: '2-B', link: '/brooke2/2'},
              {text: '2-C', link: '/brooke2/1'}
          ]
      }
  ],
  '/demo2/': [
      {
          text: '案例2',
          // 是否可收缩
          collapsible: true,
          // 是否默认展开
          collapsed: true,
          items: [
              {text: '2-A', link: '/brooke2/1'},
              {text: '2-B', link: '/brooke2/1'},
              {text: '2-C', link: '/brooke2/1'}
          ]
      }
  ]
}
// 主题配置
const themeConfig = {
  // 全局左侧菜单
  sidebar,
  // 顶部导航
  nav,
  // 站点标题
  siteTitle: '徐大兵',
  // 最后跟新时间标题
  lastUpdatedText: '上次更新',
  // logo
  logo: '.././images/logo.png',
  // 社交链接
  socialLinks,
  // 页脚配置
  footer,
  // 上一个和下一个链接上方显示的文本
  docFooter,
  // 右侧目录标题
  outlineTitle: '本页目录'
}

// APP配置
module.exports = {
  // 主题配置
  themeConfig,
  // markdown 配置
  markdown,
  // 站点标题
  title: 'Cobweb Docs',
  // 站点说明
  description: '徐大兵',
  // base URL
  base: './',
  // 站点lang
  lang: 'zh-CN',
  // 是否显示更新时间
  lastUpdated: true,
  // 当设置为true时，VitePress不会因死链接而导致构建失败。
  ignoreDeadLinks: true,
  head
}
