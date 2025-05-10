import comp from "/Users/staoguo/Desktop/mine/project/staoguo/docs/.vuepress/.temp/pages/posts/article12.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article12.html\",\"title\":\"Vue 3 相比 Vue 2 性能提升的详细分析\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"1. 虚拟 DOM 重写（性能优化）\",\"slug\":\"_1-虚拟-dom-重写-性能优化\",\"link\":\"#_1-虚拟-dom-重写-性能优化\",\"children\":[]},{\"level\":2,\"title\":\"2. 组合式 API（Composition API）\",\"slug\":\"_2-组合式-api-composition-api\",\"link\":\"#_2-组合式-api-composition-api\",\"children\":[]},{\"level\":2,\"title\":\"3. Tree Shaking 和代码优化\",\"slug\":\"_3-tree-shaking-和代码优化\",\"link\":\"#_3-tree-shaking-和代码优化\",\"children\":[]},{\"level\":2,\"title\":\"4. 响应式系统优化（Proxy API）\",\"slug\":\"_4-响应式系统优化-proxy-api\",\"link\":\"#_4-响应式系统优化-proxy-api\",\"children\":[]},{\"level\":2,\"title\":\"5. 更小的包体积\",\"slug\":\"_5-更小的包体积\",\"link\":\"#_5-更小的包体积\",\"children\":[]},{\"level\":2,\"title\":\"6. Suspense 和异步渲染\",\"slug\":\"_6-suspense-和异步渲染\",\"link\":\"#_6-suspense-和异步渲染\",\"children\":[]},{\"level\":2,\"title\":\"7. 更高效的组件生命周期管理\",\"slug\":\"_7-更高效的组件生命周期管理\",\"link\":\"#_7-更高效的组件生命周期管理\",\"children\":[]},{\"level\":2,\"title\":\"8. 更强的 TypeScript 支持\",\"slug\":\"_8-更强的-typescript-支持\",\"link\":\"#_8-更强的-typescript-支持\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":1743828315000,\"contributors\":[{\"name\":\"gsben\",\"username\":\"gsben\",\"email\":\"704684827@qq.com\",\"commits\":1,\"url\":\"https://github.com/gsben\"}],\"changelog\":[{\"hash\":\"fedb5cc9654cc7c06da94ed6b6caf3e2b9f1234d\",\"time\":1743828315000,\"email\":\"704684827@qq.com\",\"author\":\"gsben\",\"message\":\"init\"}]},\"filePathRelative\":\"posts/article12.md\",\"excerpt\":\"\\n<p>Vue 3 在多个方面对性能进行了优化，下面我们将详细分析这些改进的具体内容。</p>\\n<h2>1. 虚拟 DOM 重写（性能优化）</h2>\\n<p>在 Vue 2 中，虚拟 DOM 的实现主要是基于 <code>Object.defineProperty</code> 来劫持数据变动，但在对比和更新虚拟 DOM 时，Vue 2 会存在一些性能瓶颈，特别是在较大应用中更新频繁的情况下。</p>\\n<p>在 Vue 3 中，虚拟 DOM 的算法被重新设计，采用了 <strong>更精确的 diff 算法</strong>，同时通过 <strong>Proxy API</strong> 让 Vue 能够更高效地追踪数据变化，避免了 Vue 2 中需要进行繁琐的递归遍历和更新的过程。Vue 3 的虚拟 DOM 更新方式能够 <strong>更小颗粒度的 diff 操作</strong>，只更新需要变动的部分，而不是全量更新。</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
