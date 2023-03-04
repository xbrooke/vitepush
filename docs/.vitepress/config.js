const head = [
  ['link', {rel: 'icon', href: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png'}]
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
  {icon: 'github', link: 'https://github.com/xbrooke'},
  // 或者导入svg图片
  {icon: {svg: gitee}, link: 'https://gitee.com/maddragon'},
  {icon: {svg: coding}, link: 'https://maddragon.coding.net/user/projects'},
  {icon: {svg: oschina}, link: 'https://my.oschina.net/520wsl'},
]
// 页脚配置
const footer = {
  // 消息
  message: ' 蟹蟹有你团队',
  // 版权
  copyright: '©2023 <a href="https://github.com/xbrooke" target="_black" >  | 徐大兵维护</a> '
}

// 上一个和下一个链接上方显示的文本
const docFooter = {
  prev: '测试',
  next: 'https://github.com/'
}

// 顶部导航
const nav = [
  {text: '首页', link: '/'},
  {
      text: '我们的优势',
      activeMatch: '/demo1/',//在同一个文件夹的目录，关联其他目录就不会固定左边栏
      items: [
          {
              text: '团队优势',
              items: [
                  {text: '人员架构', link: '/demo1/a'},
                  {text: '团队技能', link: '/demo1/b'},
              ]
              
          },
          {
              text: '运营优势',
              items: [
                  {text: '渠道规则', link: '/demo1/a'},
                  {text: '团队赋能', link: '/demo1/b'},
              ]
          }
      ]
  }
]

// 全局左侧菜单 显示我们优势的总栏
const sidebar = {
  '/demo1/': [
      {
          text: '我们的优势',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
              {text: '运营团队', link: '/demo2/a'},
              {text: '团队赋能', link: '/demo2/b'},
          ]
      },
      {
        text: '运营优势',
        // 是否可收缩
        collapsible: true,
        // 是否折叠
        collapsed: false,
        items: [
            {text: '渠道规则', link: '/demo1/a'},
            {text: '好好住', link: '/brooke/hhz'},
        ]
    },
      {
        text: '优秀案例',
        // 是否可收缩
        collapsible: true,
        // 是否折叠
        collapsed: false,
        items: [
            {text: '2-A', link: '/demo1/a'},
            {text: '2-B', link: '/brooke2/2'},
            {text: '2-C', link: '/brooke2/1'}
        ]
    }
  ],
  //第二栏不会出现第一栏的内容标题
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
  siteTitle: '蟹蟹有你',
  // 最后跟新时间标题
  lastUpdatedText: '上次更新',
  // logo
  logo: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png',
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
  title: '运营文档库',
  // 站点说明
  description: '徐大兵',
  // base URL
  base: '/vitepush/',
  // 站点lang
  lang: 'zh-CN',
  // 是否显示更新时间
  lastUpdated: true,
  // 当设置为true时，VitePress不会因死链接而导致构建失败。
  ignoreDeadLinks: true,
  head
}
