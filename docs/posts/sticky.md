---
date: 2025-04-06
category:
  - front
tag:
  - vue
sticky: true
excerpt: <p>vue2 和 vue3 的对比</p>
---

# Vue2 和 Vue3 的区别

## 1. 响应式系统（Reactivity System）

### Vue2:

- Vue2 使用基于 `Object.defineProperty` 的响应式系统，通过劫持对象的 getter 和 setter 来追踪依赖并更新视图。
- 缺点：性能开销较大，尤其是在大型数据结构和深层嵌套的对象上。并且 `Object.defineProperty` 无法监控新增的属性（需要使用 `Vue.set` 或 `this.$set`）。

### Vue3:

- Vue3 使用基于 `Proxy` 的响应式系统，对整个对象进行代理，能拦截并处理所有操作。
- 优点：
  - 支持深层次的响应式变化，新增属性也能被自动追踪。
  - 性能大幅提升，尤其是在处理大量数据时。

## 2. Composition API

### Vue2:

- Vue2 使用的是 **Options API**，组件的逻辑通过 `data`、`methods`、`computed`、`watch` 等选项组织。这种方式对复杂组件的逻辑模块化较为困难，特别是在组件较为复杂时。

### Vue3:

- Vue3 引入了 **Composition API**，通过 `setup()` 函数组织组件逻辑，使得代码更加模块化和可复用。
- 使用 `ref` 和 `reactive` 创建响应式数据，`computed` 和 `watch` 用于计算属性和监听。

## 3. 性能优化

### Vue2:

- 性能优化较为基础，主要通过虚拟 DOM 和懒加载等技术进行提升。性能上可能存在一些瓶颈，尤其是在处理复杂数据时。

### Vue3:

- Vue3 在启动和内存消耗上得到了显著提升。采用 `Proxy` 使得响应式系统性能更强，减少了性能开销。
- 进一步优化虚拟 DOM 渲染，树摇优化（Tree-shaking）可以去除未使用的代码，使得构建后的包体积更小。

## 4. TypeScript 支持

### Vue2:

- Vue2 对 TypeScript 支持较为有限，官方提供的类型定义不完整，需要依赖第三方库增强类型支持。

### Vue3:

- Vue3 提供了原生的 TypeScript 支持，几乎所有的功能都可以通过 TypeScript 类型定义。这使得开发者能够充分利用 TypeScript 提升开发体验。

## 5. 生命周期钩子

### Vue2:

- Vue2 中的生命周期钩子如 `beforeCreate`、`created`、`beforeMount`、`mounted` 等。

### Vue3:

- Vue3 中的生命周期钩子以函数形式出现在 `setup()` 中，命名方式有所变化。例如，`beforeMount` 变成了 `onBeforeMount`，`mounted` 变成了 `onMounted` 等。

## 6. Fragment、Teleport 和 Suspense

### Vue2:

- Vue2 中每个组件只能有一个根元素，如果需要多个根元素，通常需要使用一个 `div` 包裹。

### Vue3:

- **Fragment**：允许一个组件有多个根元素，而无需额外的包裹元素。
- **Teleport**：使得你可以将子组件的内容渲染到 DOM 中的其他位置（例如 `#app` 外部）。
- **Suspense**：处理异步组件加载状态，类似 React 的 Suspense，可以显示加载中的占位内容。

## 7. 自定义渲染器（Custom Renderer）

### Vue2:

- Vue2 的渲染机制是基于虚拟 DOM，但没有特别设计的 API 来创建自定义渲染器。

### Vue3:

- Vue3 提供了更加灵活的 **自定义渲染器 API**，允许开发者创建自定义的渲染机制，例如渲染到 Canvas 或 WebGL。

## 8. 全局 API

### Vue2:

- Vue2 中很多 API 是全局的，直接挂载到 `Vue` 实例上，如 `Vue.use`、`Vue.component`、`Vue.mixin` 等。

### Vue3:

- Vue3 将全局 API 重构为通过 **`app` 实例进行挂载**，例如 `app.use()` 替代 `Vue.use()`，`app.component()` 替代 `Vue.component()` 等。

## 9. Scoped Slots

### Vue2:

- Vue2 中的 **Scoped Slots** 语法较为复杂，需要通过插槽作用域传递数据。

### Vue3:

- Vue3 改进了 **Scoped Slots** 的语法，变得更加简洁和直观，传递的数据也更加清晰。

## 10. Tree Shaking 和构建工具

### Vue2:

- Vue2 的构建工具较为基础，虽然可以通过 Webpack 等工具进行优化，但对 Tree Shaking 支持有限。

### Vue3:

- Vue3 支持 **Tree Shaking**，可以大大减少最终的打包体积，并且优化了构建工具和插件，构建速度更快。

## 11. 其他新特性

- **Provide/Inject**：Vue3 对 `provide/inject` API 进行了改进，使用更为简洁直观。
- **Suspense & Async Components**：Vue3 支持异步组件加载时显示占位符，并提供更简单的处理方式。

---

## 总结

- **Vue3** 引入了很多新特性和优化，最重要的是 **响应式系统** 和 **Composition API**，使得开发更加灵活和高效，尤其在性能方面得到了大幅提升。
- **Vue2** 仍然是一个成熟且稳定的框架，许多企业和项目仍在使用 Vue2，特别是在一些老旧项目中。对于新项目，Vue3 提供了更好的选择，而对于旧项目，Vue2 依然能满足需求。
