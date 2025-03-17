/**
 * iOS Toast
 * 一个轻量级的iOS风格Toast通知组件
 *
 * @version 1.0.0
 * @author qq3pp
 * @license MIT
 */

class IOSToast {
  constructor(options = {}) {
    this.containerId = options.containerId || "ios-toast-container";
    this.createContainer();

    // 预定义图标集合
    this.icons = {
      success:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
      warning:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      error:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
      mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
      bell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>',
    };

    this.injectCSS();
  }

  // 创建Toast容器
  createContainer() {
    let container = document.getElementById(this.containerId);

    if (!container) {
      container = document.createElement("div");
      container.id = this.containerId;
      container.className = "ios-toast-container";
      document.body.appendChild(container);
    }

    this.container = container;
  }

  // 注入CSS样式
  injectCSS() {
    if (document.getElementById("ios-toast-styles")) return;

    const styleElement = document.createElement("style");
    styleElement.id = "ios-toast-styles";
    styleElement.textContent = `
        .ios-toast-container {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          pointer-events: none;
        }

        .ios-toast {
          display: inline-flex;
          align-items: center;
          border-radius: 50px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          animation: ios-toast-fadeIn 0.3s ease-out forwards;
          transition: transform 0.3s ease;
          height: 60px;
          max-width: 90vw;
          pointer-events: all;
          margin: 0 auto;
        }

        .ios-toast:hover {
          transform: scale(1.02);
        }

        .ios-toast.light {
          background-color: white;
          color: #000;
        }

        .ios-toast.dark {
          background-color: #1c1c1e;
          color: white;
        }

        .ios-toast-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 12px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .ios-toast-icon svg {
          width: 24px;
          height: 24px;
        }

        .ios-toast-content {
          padding: 0 24px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .ios-toast.no-icon .ios-toast-content {
          padding: 0 24px;
        }

        .ios-toast-title {
          font-weight: 600;
          font-size: 16px;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .ios-toast-subtitle {
          font-size: 13px;
          opacity: 0.7;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        @keyframes ios-toast-fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ios-toast-fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `;

    document.head.appendChild(styleElement);
  }

  /**
   * 显示Toast通知
   * @param {string} title - 主标题
   * @param {string} [subtitle] - 副标题
   * @param {Object} [options] - 配置选项
   * @param {string} [options.theme] - 主题 ('light' 或 'dark')
   * @param {boolean} [options.hasIcon] - 是否显示图标
   * @param {string} [options.iconType] - 图标类型 ('success', 'info', 'warning', 'error', 'mail', 'bell')
   * @param {number} [options.duration] - 显示时长(毫秒)
   * @returns {HTMLElement} - Toast元素
   */
  show(title, subtitle = "", options = {}) {
    const {
      theme = "light",
      hasIcon = true,
      iconType = null,
      duration = 3000,
    } = options;

    // 如果设置了hasIcon为true但未指定iconType，则自动将hasIcon设为false
    let showIcon = hasIcon;
    if (hasIcon && !iconType) {
      showIcon = false;
    }

    // 创建Toast元素
    const toastElement = document.createElement("div");
    const classes = ["ios-toast", theme];

    if (!subtitle) classes.push("no-subtitle");
    if (!showIcon) classes.push("no-icon");

    toastElement.className = classes.join(" ");

    // 生成图标HTML
    let iconHtml = "";
    if (showIcon && iconType && this.icons[iconType]) {
      iconHtml = `<div class="ios-toast-icon">${this.icons[iconType]}</div>`;
    }

    // 创建内容HTML
    let contentHtml = `
        <div class="ios-toast-content">
          <div class="ios-toast-title">${title}</div>
          ${subtitle ? `<div class="ios-toast-subtitle">${subtitle}</div>` : ""}
        </div>
      `;

    // 设置内部HTML
    toastElement.innerHTML = iconHtml + contentHtml;

    // 先添加到一个不可见的容器进行宽度计算
    toastElement.style.visibility = "hidden";
    toastElement.style.position = "absolute";
    document.body.appendChild(toastElement);

    // 等待下一帧以确保DOM已更新并且可以获取到尺寸
    requestAnimationFrame(() => {
      // 移除临时样式
      toastElement.style.visibility = "";
      toastElement.style.position = "";

      // 从临时位置移除并添加到实际容器
      if (toastElement.parentNode) {
        document.body.removeChild(toastElement);
      }

      // 添加到实际容器
      this.container.appendChild(toastElement);

      // 设置指定时间后消失
      setTimeout(() => {
        toastElement.style.animation = "ios-toast-fadeOut 0.3s forwards";
        setTimeout(() => {
          if (toastElement.parentNode) {
            this.container.removeChild(toastElement);
          }
        }, 300);
      }, duration);
    });

    return toastElement;
  }

  /**
   * 显示成功类型的Toast
   * @param {string} title - 主标题
   * @param {string} [subtitle] - 副标题
   * @param {Object} [options] - 其他配置选项
   */
  success(title, subtitle = "", options = {}) {
    return this.show(title, subtitle, {
      ...options,
      iconType: "success",
      hasIcon: true,
    });
  }

  /**
   * 显示信息类型的Toast
   * @param {string} title - 主标题
   * @param {string} [subtitle] - 副标题
   * @param {Object} [options] - 其他配置选项
   */
  info(title, subtitle = "", options = {}) {
    return this.show(title, subtitle, {
      ...options,
      iconType: "info",
      hasIcon: true,
    });
  }

  /**
   * 显示警告类型的Toast
   * @param {string} title - 主标题
   * @param {string} [subtitle] - 副标题
   * @param {Object} [options] - 其他配置选项
   */
  warning(title, subtitle = "", options = {}) {
    return this.show(title, subtitle, {
      ...options,
      iconType: "warning",
      hasIcon: true,
    });
  }

  /**
   * 显示错误类型的Toast
   * @param {string} title - 主标题
   * @param {string} [subtitle] - 副标题
   * @param {Object} [options] - 其他配置选项
   */
  error(title, subtitle = "", options = {}) {
    return this.show(title, subtitle, {
      ...options,
      iconType: "error",
      hasIcon: true,
    });
  }
}

// 导出全局实例
const iosToast = new IOSToast();

// 支持CommonJS、AMD和全局变量
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { IOSToast, iosToast };
} else if (typeof define === "function" && define.amd) {
  define([], function () {
    return { IOSToast, iosToast };
  });
} else {
  window.IOSToast = IOSToast;
  window.iosToast = iosToast;
}
