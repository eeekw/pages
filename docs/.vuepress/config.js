module.exports = {
  base: '/pages/',
  title: 'Keen',
  description: 'Keen的持续输出',
  smoothScroll: true,
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    repo: 'KeenV/pages',
    docsRepo: 'KeenV/docs',
    locales: {
      '/': {
        lastUpdated: '上次更新',
        nav: [
          { text: '前端', link: '/front-end/' },
          { text: 'Flutter', link: '/flutter/layout' },
          { text: '其它', link: '/others/git' }
        ],
        sidebar: {
          '/front-end/': [
            '',
            {
              title: 'vue',
              collapsable: false,
              children: ['source-code', 'vue-note'].map((v) => '/front-end/vue/' + v)
            },
            {
              title: 'react',
              collapsable: false,
              children: ['optimizing-performance'].map((v) => '/front-end/react/' + v)
            },
            {
              title: 'typescript',
              collapsable: false,
              children: ['declaration-files'].map((v) => '/front-end/typescript/' + v)
            },
            {
              title: 'webpack',
              collapsable: false,
              children: ['', 'vue-loader'].map((v) => '/front-end/webpack/' + v)
            },
            'performance',
            'babel',
            'javascript',
            'mpvue',
            'source-maps',
            'svg',
            'x5',
            {
              title: 'css',
              path: '/front-end/css/',
              children: [
                'animation',
                'backdrop-filter',
                'background-clip',
                'blur',
                'box-shadow',
                'clip-path',
                'conic-gradient',
                'contrast',
                'drop-shadow',
                'filter',
                'linear-gradient',
                'mix-blend-mode',
                'radial-gradient',
                'webkit-box-reflect',
                'word-break'
              ].map((v) => '/front-end/css/' + v)
            }
          ],
          '/flutter/': ['layout', 'flutter-note'],
          '/others/': [
            'git',
            'http',
            'cors',
            'nginx',
            'docker',
            'k8s',
            'pixel',
            'software',
            'husky',
            'gaussian-blur',
            'bezier-curve',
            'matrix',
            'dns'
          ]
        }
      }
    }
  },
  patterns: [
    'docs/**/*.md' // 使用相对路径
  ],
  plugins: [require('./source-dir.js')]
}
