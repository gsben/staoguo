---
date: 2025-04-06
category:
  - front
tag:
  - vue
sticky: 10
---

# Vue.js 的机制和流程

Vue.js 的整个流程可以从 源码架构、运行机制 和 生命周期 三个方面详细解析

<!-- more -->

## 1. Vue 的源码架构

Vue 的源码主要分为以下几个核心模块：

. Observer（响应式系统）：使用 Object.defineProperty（Vue 2）或 Proxy（Vue 3）实现数据响应式。

. Compiler（编译器）：将模板解析成虚拟 DOM（Virtual DOM）渲染函数。

. Virtual DOM（虚拟 DOM）：Vue 维护一棵虚拟 DOM 树，并使用 Diff 算法高效更新真实 DOM。

. Renderer（渲染器）：负责将虚拟 DOM 转换成真实 DOM，并更新 UI。

. Scheduler（调度器）：负责任务调度，确保批量更新，提高性能。

## 2. Vue 的运行机制

Vue 的运行流程大致如下：

### 1.初始化 Vue 实例

### 2.模板编译

### 3.响应式数据初始化

### 4.首次渲染

### 5.监听数据变化

### 6.数据更新时，触发重新渲染

### 7.销毁 Vue 实例

## 2. 详细流程

### ① 初始化 Vue 实例

```js
const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
```

Vue 通过 new Vue() 进入初始化阶段，主要执行：

合并配置（mergeOptions）：解析 data、methods、computed 等选项。

创建响应式数据（initData）：调用 Observer 监听数据变化，劫持 data。

编译模板（compile）：如果 template 选项存在，会将其编译成渲染函数 render()。

挂载组件（mountComponent）：进入挂载流程，渲染页面。

### ② 模板编译

Vue 的模板编译是 三步：

解析模板（Parse）：将模板解析成 AST（抽象语法树）。

优化 AST（Optimize）：标记静态节点，优化渲染性能。

生成渲染函数（Generate）：将 AST 转换成 render 函数。

示例：

```vue
<div id="app">{{ message }}</div>
```

编译后：

```js
function render() {
  return _c("div", { attrs: { id: "app" } }, [_v(_s(message))]);
}
```

这个 render() 生成虚拟 DOM，Vue 通过它高效更新页面。

### ③ 响应式数据初始化

Vue 采用 数据劫持 + 发布-订阅模式 实现响应式：

#### 数据劫持（Observer）

1.Vue 2 通过 Object.defineProperty 监听 data 的 getter 和 setter。

2.Vue 3 通过 Proxy 代理整个对象。

#### 依赖收集（Dep & Watcher）

1.当组件使用 data 时，Vue 记录 Watcher 依赖。

2.当数据变化时，通知 Watcher 触发更新。

```js
let data = { message: "Hello Vue!" };
Object.defineProperty(data, "message", {
  get() {
    console.log("数据获取");
    return value;
  },
  set(newValue) {
    console.log("数据更新", newValue);
    value = newValue;
    updateComponent(); // 触发 UI 更新
  },
});
```

### ④ 首次渲染

1.执行 render() 生成虚拟 DOM

2.通过 patch() 生成真实 DOM 并插入页面

3.绑定事件监听器

```js
updateComponent = function () {
  vm._update(vm._render());
};
```

\_render() -> 生成虚拟 DOM

\_update() -> 计算差异并更新 DOM

### ⑤ 监听数据变化

当数据发生变化时，Vue 通过以下流程更新 UI：

1.触发 setter

2.依赖收集的 Watcher 触发 updateComponent()

3.执行 render() 生成新的虚拟 DOM

4.patch() 比较新旧虚拟 DOM，更新真实 DOM

```
data.message = 'Hello World!';
```

触发 setter 后，Vue 会通知 Watcher，更新 UI。

### ⑥ 重新渲染

Vue 采用 Diff 算法 优化 DOM 更新：

1.对比新旧虚拟 DOM

2.找出最小差异

3.只更新变化的部分

```
diff(oldVNode, newVNode);
```

Vue 通过 同级比较、标签类型相同则对比属性、递归子节点 等策略，减少 DOM 操作，提高性能。

### ⑦ 销毁 Vue 实例

当调用 vm.$destroy() 时：

1.销毁组件

2.移除响应式监听

3.解绑事件

4.移除 DOM

```
vm.$destroy();
```

## 3. Vue 生命周期

Vue 组件从创建到销毁会经历 8 个生命周期钩子：

1.beforeCreate：实例初始化前，data 和 methods 还未创建。

2.created：实例已创建，data 已初始化。

3.beforeMount：模板编译完成，但未挂载 DOM。

4.mounted：组件已挂载，el 可访问。

5.beforeUpdate：数据变化，虚拟 DOM 重新渲染前触发。

6.updated：数据更新后，DOM 已同步。

7.beforeDestroy：组件销毁前，可执行清理工作。

8.destroyed：组件销毁后，所有监听器、子组件已移除。

```js
export default {
  data() {
    return { message: "Hello Vue!" };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
```

## 总结

### 初始化 Vue 实例

配置合并
初始化响应式
编译模板

### 首次渲染

生成虚拟 DOM
patch() 渲染真实 DOM

### 数据监听

Observer 监听 data
Dep & Watcher 依赖收集

### 更新流程

触发 setter
重新执行, render()
patch() 更新 DOM

### 组件销毁

移除 DOM
清理监听器

这样 Vue 通过 响应式数据、虚拟 DOM、Diff 算法 实现高效渲染。
