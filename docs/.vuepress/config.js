module.exports = {
    title: '前端记录',
    description: 'opcw/2018年',
    port: '8090',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: 'api文档', link: '/api/' },
            { text: '学习文档', link: '/learn/' },
            { text: '项目文档', link: '/item/' },
        ],
        sidebar: {
            '/api/': [
                ["", '介绍'],
                ['api', 'api接口文档'],
            ],
            "/learn/": [
                ["", '介绍'],
                ['es6', 'es6学习文档'],
                ['vue', 'vue学习文档'],
                ['react', 'react学习文档'],
                ['css', '样式布局']
            ],
            "/item/": [
                ["", '介绍'],
                ['h5', 'h5文档'],
            ],
        },

        displayAllHeaders: false, // 默认值：false
        // serviceWorker: true,
        // sidebar: 'auto',
        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    },
};