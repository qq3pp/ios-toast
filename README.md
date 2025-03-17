<div align="center">
  <picture>
    <img src="./logo.svg" alt="logo" />
  </picture>

# [iOS Toast](https://ios-toast.vercel.app)

![](https://img.shields.io/github/license/qq3pp/ios-toast)
![](https://img.shields.io/github/issues/qq3pp/ios-toast)

#### A lightweight iOS-style toast notification library for web applications.


English | [Chinese](./README_CN.md)

</div>

### Features

- 🎨 iOS-style toast notifications
- 🚀 Lightweight with zero dependencies
- 📱 Responsive and mobile-friendly
- 🌗 Light and dark theme support
- 🖼️ Built-in icon sets
- ⚙️ Highly customizable
- 🔌 Simple API

### Installation

#### Method 1: Via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/qq3pp/ios-toast@main/ios-toast.js"></script>
```

#### Method 2: Download and include

1. Download the `ios-toast.js` file
2. Include it in your HTML:

```html
<script src="path/to/ios-toast.js"></script>
```

### Basic Usage

```javascript
// Basic toast with title only
iosToast.show("File uploaded");

// Toast with title and subtitle
iosToast.show("AirPods Connected", "Battery: 80%");

// Success toast (with success icon)
iosToast.success("Success", "Your changes have been saved");

// Info toast
iosToast.info("Information", "New update available");

// Warning toast
iosToast.warning("Warning", "Low battery");

// Error toast
iosToast.error("Error", "Connection failed");
```

### API Reference

#### Global Instance

The library automatically creates a global instance `iosToast` that you can use directly.

#### Custom Instance

You can create your own instance with custom configuration:

```javascript
const myToast = new IOSToast({
  containerId: 'my-custom-container'
});
```

#### Methods

##### show(title, subtitle, options)

Display a toast notification.

- `title` (String): Main notification text
- `subtitle` (String, optional): Secondary text
- `options` (Object, optional): Configuration options
  - `theme` (String): 'light' or 'dark' (default: 'light')
  - `hasIcon` (Boolean): Whether to show an icon (default: true)
  - `iconType` (String): Icon type ('success', 'info', 'warning', 'error', 'mail', 'bell')
  - `duration` (Number): Duration in milliseconds (default: 3000)

##### success(title, subtitle, options)

Shorthand for showing a success toast.

##### info(title, subtitle, options)

Shorthand for showing an info toast.

##### warning(title, subtitle, options)

Shorthand for showing a warning toast.

##### error(title, subtitle, options)

Shorthand for showing an error toast.

### Examples

#### Custom Theme and Duration

```javascript
iosToast.show("Dark Mode Activated", "System settings updated", {
  theme: "dark",
  duration: 5000,
  iconType: "info"
});
```

#### Toast without Icon

```javascript
iosToast.show("Simple notification", "No icon needed", {
  hasIcon: false
});
```

#### Using as Alert Replacement

```javascript
// Instead of:
// alert("Operation completed");

// Use:
iosToast.success("Operation completed");
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### License

MIT License

---

