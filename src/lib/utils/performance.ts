/**
 * 性能优化工具函数
 * 提供图片预加载、资源预连接、性能监控等功能
 */

/**
 * 预加载关键图片
 * @param urls 图片 URL 数组
 */
export function preloadImages(urls: string[]): void {
  if (typeof window === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * 预连接到外部域名
 * @param domains 域名数组
 */
export function preconnectDomains(domains: string[]): void {
  if (typeof window === 'undefined') return;

  domains.forEach((domain) => {
    // DNS 预解析
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);

    // 预连接
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = domain;
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
  });
}

/**
 * 懒加载图片观察器
 */
export class LazyImageObserver {
  private observer: IntersectionObserver | null = null;

  constructor(options?: IntersectionObserverInit) {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          const srcset = img.dataset.srcset;

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }

          if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
          }

          img.classList.add('loaded');
          this.observer?.unobserve(img);
        }
      });
    }, options || { rootMargin: '50px' });
  }

  observe(element: Element): void {
    this.observer?.observe(element);
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}

/**
 * Web Vitals 性能监控
 */
export interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

/**
 * 获取 CLS (Cumulative Layout Shift)
 */
export function getCLS(callback: (metric: WebVitalsMetric) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        clsEntries.push(entry);
      }
    }
  });

  observer.observe({ type: 'layout-shift', buffered: true });

  // 页面隐藏时报告
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      callback({
        name: 'CLS',
        value: clsValue,
        rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor',
        delta: clsValue,
        id: `v1-${Date.now()}`,
      });
      observer.disconnect();
    }
  });
}

/**
 * 获取 LCP (Largest Contentful Paint)
 */
export function getLCP(callback: (metric: WebVitalsMetric) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  let lcpValue = 0;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as any;
    lcpValue = lastEntry.renderTime || lastEntry.loadTime;
  });

  observer.observe({ type: 'largest-contentful-paint', buffered: true });

  // 页面隐藏时报告
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      callback({
        name: 'LCP',
        value: lcpValue,
        rating: lcpValue <= 2500 ? 'good' : lcpValue <= 4000 ? 'needs-improvement' : 'poor',
        delta: lcpValue,
        id: `v1-${Date.now()}`,
      });
      observer.disconnect();
    }
  });
}

/**
 * 获取 FID (First Input Delay)
 */
export function getFID(callback: (metric: WebVitalsMetric) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const firstInput = entries[0] as any;
    const fidValue = firstInput.processingStart - firstInput.startTime;

    callback({
      name: 'FID',
      value: fidValue,
      rating: fidValue <= 100 ? 'good' : fidValue <= 300 ? 'needs-improvement' : 'poor',
      delta: fidValue,
      id: `v1-${Date.now()}`,
    });

    observer.disconnect();
  });

  observer.observe({ type: 'first-input', buffered: true });
}

/**
 * 获取 TTFB (Time to First Byte)
 */
export function getTTFB(callback: (metric: WebVitalsMetric) => void): void {
  if (typeof window === 'undefined' || !window.performance) {
    return;
  }

  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    const ttfbValue = navigationEntry.responseStart - navigationEntry.requestStart;

    callback({
      name: 'TTFB',
      value: ttfbValue,
      rating: ttfbValue <= 600 ? 'good' : ttfbValue <= 1500 ? 'needs-improvement' : 'poor',
      delta: ttfbValue,
      id: `v1-${Date.now()}`,
    });
  }
}

/**
 * 监控所有 Web Vitals
 */
export function monitorWebVitals(callback: (metric: WebVitalsMetric) => void): void {
  getCLS(callback);
  getLCP(callback);
  getFID(callback);
  getTTFB(callback);
}

/**
 * 资源提示助手
 */
export const ResourceHints = {
  /**
   * 添加 DNS 预解析
   */
  dnsPrefetch(domain: string): void {
    if (typeof document === 'undefined') return;
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  },

  /**
   * 添加预连接
   */
  preconnect(domain: string, crossorigin = false): void {
    if (typeof document === 'undefined') return;
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (crossorigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  },

  /**
   * 添加预加载
   */
  preload(url: string, as: string, type?: string): void {
    if (typeof document === 'undefined') return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    if (type) {
      link.type = type;
    }
    document.head.appendChild(link);
  },

  /**
   * 添加预获取
   */
  prefetch(url: string): void {
    if (typeof document === 'undefined') return;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  },
};

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * 检测是否支持 WebP
 */
export function supportsWebP(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * 获取设备像素比
 */
export function getDevicePixelRatio(): number {
  if (typeof window === 'undefined') {
    return 1;
  }
  return window.devicePixelRatio || 1;
}

/**
 * 检测网络连接类型
 */
export function getConnectionType(): string {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return 'unknown';
  }
  return (navigator as any).connection.effectiveType || 'unknown';
}

/**
 * 检测是否为慢速网络
 */
export function isSlowConnection(): boolean {
  const connectionType = getConnectionType();
  return connectionType === 'slow-2g' || connectionType === '2g';
}
