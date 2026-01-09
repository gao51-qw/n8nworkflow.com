/**
 * 无限滚动脚本
 * 实现工作流列表的无限滚动加载功能
 */

import type { Workflow, LoadMoreResponse } from '../lib/types/workflow';

interface InfiniteScrollConfig {
  sentinelId: string;
  gridId: string;
  statusId: string;
  loadMoreUrl: string;
  totalCount: number;
  initialOffset: number;
  limit: number;
  rootMargin: string;
}

class InfiniteScroll {
  private sentinel: HTMLElement | null;
  private gridContainer: HTMLElement | null;
  private statusContainer: HTMLElement | null;
  private observer: IntersectionObserver | null = null;

  private currentOffset: number = 0;
  private isLoading = false;
  private allLoaded = false;
  private totalCount: number = 0;
  private loadMoreUrl: string = '';
  private limit: number = 10;
  private rootMargin: string = '500px';

  constructor(config?: Partial<InfiniteScrollConfig>) {
    // 默认配置
    const defaultConfig: InfiniteScrollConfig = {
      sentinelId: 'infinite-scroll-sentinel',
      gridId: 'workflows-grid',
      statusId: 'infinite-scroll-status',
      loadMoreUrl: '/api/load-more-workflows.json',
      totalCount: 0,
      initialOffset: 0,
      limit: 10,
      rootMargin: '500px',
    };

    const finalConfig = { ...defaultConfig, ...config };

    // 获取 DOM 元素
    this.sentinel = document.getElementById(finalConfig.sentinelId);
    this.gridContainer = document.getElementById(finalConfig.gridId);
    this.statusContainer = document.getElementById(finalConfig.statusId);

    if (!this.sentinel || !this.gridContainer) {
      console.warn('Infinite scroll elements not found');
      return;
    }

    // 从 data 属性读取配置（如果存在）
    this.totalCount = parseInt(this.sentinel.dataset.total || String(finalConfig.totalCount), 10);
    this.loadMoreUrl = this.sentinel.dataset.url || finalConfig.loadMoreUrl;
    this.currentOffset = this.gridContainer.children.length || finalConfig.initialOffset;
    this.limit = finalConfig.limit;
    this.rootMargin = finalConfig.rootMargin;

    // 初始化
    this.setupObserver();
    this.setupScrollFallback();
  }

  /**
   * 设置 Intersection Observer
   */
  private setupObserver(): void {
    if (!this.sentinel) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isLoading && !this.allLoaded) {
          this.loadMore();
        }
      },
      {
        rootMargin: this.rootMargin,
        threshold: 0.1,
      }
    );

    this.observer.observe(this.sentinel);
  }

  /**
   * 设置滚动回退机制（兼容性）
   */
  private setupScrollFallback(): void {
    let ticking = false;

    const checkScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      if (scrollPosition / pageHeight > 0.8 && !this.isLoading && !this.allLoaded) {
        this.loadMore();
      }

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    });
  }

  /**
   * 加载更多工作流
   */
  private async loadMore(): Promise<void> {
    if (this.isLoading || this.allLoaded || this.currentOffset >= this.totalCount) {
      return;
    }

    this.isLoading = true;
    this.showLoading();

    try {
      const url = `${this.loadMoreUrl}${this.loadMoreUrl.includes('?') ? '&' : '?'}offset=${this.currentOffset}&limit=${this.limit}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: LoadMoreResponse = await response.json();

      if (data.workflows && data.workflows.length > 0) {
        this.appendWorkflows(data.workflows);
        this.currentOffset += data.workflows.length;

        // 检查是否还有更多数据
        if (!data.hasMore || this.currentOffset >= this.totalCount) {
          this.showNoMore();
        }
      } else {
        this.showNoMore();
      }
    } catch (error) {
      console.error('Error loading workflows:', error);
      this.showError();
    } finally {
      this.isLoading = false;
      this.hideLoading();
    }
  }

  /**
   * 将工作流添加到网格
   * @param workflows - 工作流数组
   */
  private appendWorkflows(workflows: Workflow[]): void {
    if (!this.gridContainer) return;

    const fragment = document.createDocumentFragment();

    workflows.forEach((workflow) => {
      const card = this.createWorkflowCard(workflow);
      fragment.appendChild(card);
    });

    this.gridContainer.appendChild(fragment);

    // 触发自定义事件
    this.dispatchLoadMoreEvent(workflows.length);
  }

  /**
   * 创建工作流卡片 DOM
   * @param workflow - 工作流数据
   * @returns 卡片元素
   */
  private createWorkflowCard(workflow: Workflow): HTMLElement {
    const card = document.createElement('a');
    card.href = `/workflows/${workflow.slug}`;
    card.className = 'group';

    // 构建分类标签
    const categoriesHtml = workflow.categories
      ?.slice(0, 2)
      .map(
        (category) =>
          `<span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full">${category}</span>`
      )
      .join('');

    const moreCategoriesHtml =
      workflow.categories && workflow.categories.length > 2
        ? `<span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">+${workflow.categories.length - 2}</span>`
        : '';

    card.innerHTML = `
      <div class="flex flex-col overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800 dark:border-gray-700 h-full">
        <div class="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
          <img
            src="${workflow.thumbnail || '/placeholder-workflow.webp'}"
            alt="Workflow preview: ${this.escapeHtml(workflow.title)}"
            class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onerror="this.onerror=null; this.src='/placeholder-workflow.webp';"
          />
          <span class="absolute top-2 right-2 text-xs px-2 py-1 rounded-full whitespace-nowrap shadow-sm font-medium"
                style="background-color: ${workflow.price ? 'rgba(255, 212, 71, 0.5)' : 'rgba(255, 94, 77, 0.5)'}; color: ${workflow.price ? 'black' : 'white'};">
            ${workflow.price ? 'Paid' : 'Free'}
          </span>
          <span class="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 whitespace-nowrap shadow-sm">
            ${workflow.complexityLevel}
          </span>
        </div>
        <div class="flex flex-col p-4 flex-1">
          <div class="mb-2">
            <h3 class="text-lg font-black text-gray-900 dark:text-white break-words">${this.escapeHtml(workflow.title)}</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">${this.escapeHtml(workflow.description)}</p>
          <div class="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
            <div class="flex justify-center items-center gap-4 mb-2 mt-2">
              <div class="flex items-center text-xs text-gray-600 dark:text-gray-300">
                <svg class="h-3.5 w-3.5 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>${this.escapeHtml(workflow.author?.name || 'Anonymous')}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${categoriesHtml}
                ${moreCategoriesHtml}
              </div>
            </div>
            <div class="flex justify-center items-center gap-8 mt-1">
              <div class="flex items-center">
                <svg class="h-3.5 w-3.5 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>${workflow.date || 'N/A'}</span>
              </div>
              <div class="flex items-center">
                <svg class="h-3.5 w-3.5 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>${workflow.visitors || 0}</span>
              </div>
              <div class="flex items-center">
                <svg class="h-3.5 w-3.5 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>${workflow.downloads || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return card;
  }

  /**
   * 转义 HTML 特殊字符
   * @param text - 要转义的文本
   * @returns 转义后的文本
   */
  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }

  /**
   * 显示加载状态
   */
  private showLoading(): void {
    this.statusContainer?.querySelector('.loading')?.classList.remove('hidden');
  }

  /**
   * 隐藏加载状态
   */
  private hideLoading(): void {
    this.statusContainer?.querySelector('.loading')?.classList.add('hidden');
  }

  /**
   * 显示"没有更多"消息
   */
  private showNoMore(): void {
    this.statusContainer?.querySelector('.no-more')?.classList.remove('hidden');
    this.allLoaded = true;

    // 停止观察
    if (this.observer && this.sentinel) {
      this.observer.unobserve(this.sentinel);
    }
  }

  /**
   * 显示错误消息
   */
  private showError(): void {
    this.statusContainer?.querySelector('.error')?.classList.remove('hidden');
  }

  /**
   * 触发加载更多事件
   * @param count - 加载的工作流数量
   */
  private dispatchLoadMoreEvent(count: number): void {
    const event = new CustomEvent('workflowsloaded', {
      detail: {
        count,
        total: this.currentOffset,
      },
    });
    window.dispatchEvent(event);
  }

  /**
   * 销毁实例
   */
  public destroy(): void {
    if (this.observer && this.sentinel) {
      this.observer.unobserve(this.sentinel);
      this.observer.disconnect();
    }
  }
}

// 在 DOM 加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new InfiniteScroll();
  });
} else {
  new InfiniteScroll();
}

// 导出类供其他模块使用
export { InfiniteScroll };
export type { InfiniteScrollConfig };
