module.exports = {
    title: '徐大兵',
    base: './',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            {
                text: '关于',
                items: [
                    { text: '关于页面1', link: '/brooke/01' },
                    { text: '关于页面2', link: '/brooke/02' }
                ]
            }
        ],
        // sideber以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
        sidebar: {
            '/about/': [
                {
                    text: '关于侧边栏',
                    items: [
                        { text: '关于1', link: '/brooke/01' },
                        { text: '关于2', link: '/brooke/02' }
                    ]
                },
 
            ]
        }
    }
}