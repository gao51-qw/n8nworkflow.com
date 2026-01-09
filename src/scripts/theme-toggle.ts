/**
 * 主题切换脚本
 * 实现明暗主题切换功能，支持 localStorage 持久化和系统主题检测
 */

type Theme = 'light' | 'dark';

class ThemeManager {
  private readonly STORAGE_KEY = 'theme';
  private currentTheme: Theme;
  private toggleButton: HTMLElement | null;
  private lightIcon: HTMLElement | null;
  private darkIcon: HTMLElement | null;

  constructor() {
    this.toggleButton = document.getElementById('theme-toggle');
    this.lightIcon = document.getElementById('theme-toggle-light-icon');
    this.darkIcon = document.getElementById('theme-toggle-dark-icon');
    
    // 获取初始主题
    this.currentTheme = this.getInitialTheme();
    
    // 应用主题
    this.applyTheme(this.currentTheme, false);
    
    // 设置事件监听
    this.setupEventListeners();
  }

  /**
   * 获取初始主题
   * 优先级：localStorage > 系统偏好 > 默认（light）
   */
  private getInitialTheme(): Theme {
    // 1. 检查 localStorage
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // 2. 检查系统偏好
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // 3. 默认为 light
    return 'light';
  }

  /**
   * 应用主题
   * @param theme - 要应用的主题
   * @param animate - 是否启用过渡动画
   */
  private applyTheme(theme: Theme, animate: boolean = true): void {
    const html = document.documentElement;

    // 如果需要动画，添加过渡类
    if (animate) {
      html.classList.add('theme-transitioning');
    }

    if (theme === 'dark') {
      html.classList.add('dark');
      this.lightIcon?.classList.add('hidden');
      this.darkIcon?.classList.remove('hidden');
    } else {
      html.classList.remove('dark');
      this.lightIcon?.classList.remove('hidden');
      this.darkIcon?.classList.add('hidden');
    }

    // 保存到 localStorage
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.currentTheme = theme;

    // 移除过渡类
    if (animate) {
      setTimeout(() => {
        html.classList.remove('theme-transitioning');
      }, 300);
    }

    // 触发自定义事件
    this.dispatchThemeChangeEvent(theme);
  }

  /**
   * 切换主题
   */
  private toggleTheme(): void {
    const newTheme: Theme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme, true);
  }

  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    // 主题切换按钮点击事件
    this.toggleButton?.addEventListener('click', () => {
      this.toggleTheme();
    });

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // 只有在用户没有手动设置主题时才跟随系统
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });

    // 监听键盘快捷键（可选：Ctrl/Cmd + Shift + D）
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  /**
   * 触发主题变化事件
   * @param theme - 新主题
   */
  private dispatchThemeChangeEvent(theme: Theme): void {
    const event = new CustomEvent('themechange', {
      detail: { theme },
    });
    window.dispatchEvent(event);
  }

  /**
   * 获取当前主题
   */
  public getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * 设置主题（公共方法）
   * @param theme - 要设置的主题
   */
  public setTheme(theme: Theme): void {
    this.applyTheme(theme, true);
  }
}

// 在 DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
  });
} else {
  new ThemeManager();
}

// 导出类型供其他模块使用
export type { Theme };
export { ThemeManager };
