module.exports = {
  extendPageData($page) {
    const {
      path, // 用于生成前端路由的path
      regularPath // 用于生成侧边栏link
    } = $page
    if (/^\/docs/.test(path)) {
      $page.path = path.replace(/^\/docs/, '')
    }
    if (/^\/docs/.test(regularPath)) {
      $page.regularPath = regularPath.replace(/^\/docs/, '')
    }
  }
}
