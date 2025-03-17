<div align="center">
  <picture>
    <img src="./logo.svg" alt="logo" />
  </picture>

# [iOS Toast](https://ios-toast.vercel.app)

![](https://img.shields.io/github/license/qq3pp/ios-toast)
![](https://img.shields.io/github/issues/qq3pp/ios-toast)

#### 一个轻量级的 iOS 风格 Toast 通知库，适用于 Web 应用。


[English](./README.md) | Chinese

</div>

### 特性

- 🎨 iOS 风格通知提示
- 🚀 轻量级，零依赖
- 📱 响应式设计，移动端友好
- 🌗 支持亮色和暗色主题
- 🖼️ 内置图标集
- ⚙️ 高度可定制
- 🔌 简洁的 API

### 安装

#### 方式一：通过 CDN

```html
<script src="https://cdn.jsdelivr.net/gh/qq3pp/ios-toast@main/ios-toast.js"></script>
```

#### 方式二：下载并引入

1. 下载 `ios-toast.js` 文件
2. 在 HTML 中引入：

```html
<script src="path/to/ios-toast.js"></script>
```

### 基本用法

```javascript
// 基础 Toast，仅标题
iosToast.show("文件已上传");

// 带标题和副标题的 Toast
iosToast.show("AirPods 已连接", "电量：80%");

// 成功类型 Toast（带成功图标）
iosToast.success("成功", "你的更改已保存");

// 信息类型 Toast
iosToast.info("信息", "新的更新可用");

// 警告类型 Toast
iosToast.warning("警告", "电量低");

// 错误类型 Toast
iosToast.error("错误", "连接失败");
```

### API 参考

#### 全局实例

库会自动创建一个全局实例 `iosToast`，你可以直接使用。

#### 自定义实例

你可以创建自己的实例并自定义配置：

```javascript
const myToast = new IOSToast({
  containerId: 'my-custom-container'
});
```

#### 方法

##### show(title, subtitle, options)

显示一个 Toast 通知。

- `title` (String): 主要通知文本
- `subtitle` (String, 可选): 次要文本
- `options` (Object, 可选): 配置选项
  - `theme` (String): 'light' 或 'dark'（默认：'light'）
  - `hasIcon` (Boolean): 是否显示图标（默认：true）
  - `iconType` (String): 图标类型（'success', 'info', 'warning', 'error', 'mail', 'bell'）
  - `duration` (Number): 持续时间，单位毫秒（默认：3000）

##### success(title, subtitle, options)

显示成功类型 Toast 的快捷方法。

##### info(title, subtitle, options)

显示信息类型 Toast 的快捷方法。

##### warning(title, subtitle, options)

显示警告类型 Toast 的快捷方法。

##### error(title, subtitle, options)

显示错误类型 Toast 的快捷方法。

### 示例

#### 自定义主题和持续时间

```javascript
iosToast.show("深色模式已启用", "系统设置已更新", {
  theme: "dark",
  duration: 5000,
  iconType: "info"
});
```

#### 无图标 Toast

```javascript
iosToast.show("简单通知", "无需图标", {
  hasIcon: false
});
```

#### 替代 Alert 使用

```javascript
// 替代传统方式：
// alert("操作已完成");

// 使用 Toast：
iosToast.success("操作已完成");
```

### 浏览器支持

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- Opera（最新版）
- 移动浏览器（iOS Safari、Android Chrome）

### 许可证

MIT 许可证

---

