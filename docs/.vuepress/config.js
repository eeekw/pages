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
        sidebar: {
          '/': [
            '',
            'babel',
            'bezier-curve',
            'cors',
            'dns',
            'docker',
            'gaussian-blur',
            'git',
            'http',
            'husky',
            'javascript',
            'k8s',
            'matrix',
            'mpvue',
            'nginx',
            'pixel',
            'software',
            'source-maps',
            'svg',
            'x5',
            {
              title: 'css',
              path: '/css/',
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
              ].map((v) => '/css/' + v)
            },
            {
              title: 'flutter',
              path: '/flutter/',
              children: ['layout', 'flutter-note'].map((v) => '/flutter/' + v)
            },
            {
              title: 'react',
              path: '/react/',
              children: ['optimizing-performance'].map((v) => '/react/' + v)
            },
            {
              title: 'typescript',
              path: '/typescript/',
              children: ['declaration-files'].map((v) => '/typescript/' + v)
            },
            {
              title: 'vue',
              path: '/vue/',
              children: ['source-code', 'vue-note'].map((v) => '/vue/' + v)
            },
            {
              title: 'webpack',
              path: '/webpack/',
              children: ['', 'vue-loader'].map((v) => '/webpack/' + v)
            }
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
