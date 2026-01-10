/**
 * FilterSidebar 交互脚本
 * 处理筛选侧边栏的所有交互逻辑
 */

export function initFilterSidebar(): void {
  // 初始化筛选选项监听
  setupFilterListeners();
  
  // 初始化重置按钮
  setupResetButton();
  
  // 初始化移动端菜单按钮
  setupMobileMenuToggle();
}

/**
 * 设置筛选选项的监听事件
 */
function setupFilterListeners(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const filterElements = document.querySelectorAll('[data-filter]');
    
    filterElements.forEach((element) => {
      element.addEventListener('change', async (e) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const filterType = target.getAttribute('data-filter');
        
        // 获取当前活跃的筛选条件
        const filters = getCurrentFilters();
        
        // 更新筛选条件
        if (target.type === 'checkbox') {
          if (target.checked) {
            if (filterType === 'category') {
              // 多选分类
              if (!filters.category) {
                filters.category = [];
              }
              if (Array.isArray(filters.category) && !filters.category.includes(target.value)) {
                filters.category.push(target.value);
              }
            } else {
              // 单选：时间段、复杂度、价格
              filters[filterType as keyof typeof filters] = target.value;
            }
          } else {
            if (filterType === 'category') {
              if (Array.isArray(filters.category)) {
                filters.category = filters.category.filter(c => c !== target.value);
              }
            } else {
              filters[filterType as keyof typeof filters] = null;
            }
          }
        } else if (target.type === 'select-one') {
          // 排序下拉菜单
          filters.sortBy = target.value;
        }
        
        // 更新 URL 查询参数
        updateURL(filters);
        
        // 获取并更新筛选计数
        await updateFilterCounts(filters);
      });
    });
  });
}

/**
 * 设置重置筛选按钮
 */
function setupResetButton(): void {
  const resetButton = document.querySelector('[data-action="reset-filters"]');
  
  if (resetButton) {
    resetButton.addEventListener('click', async () => {
      // 清空所有筛选条件
      const filterElements = document.querySelectorAll('[data-filter]') as NodeListOf<HTMLInputElement | HTMLSelectElement>;
      
      filterElements.forEach((element) => {
        if (element.type === 'checkbox') {
          element.checked = false;
        } else if (element.type === 'select-one') {
          element.value = 'date'; // 默认排序
        }
      });
      
      // 重置 URL
      window.history.pushState({}, '', window.location.pathname);
      
      // 重新加载工作流
      window.location.reload();
    });
  }
}

/**
 * 设置移动端菜单按钮
 */
function setupMobileMenuToggle(): void {
  const toggleButton = document.querySelector('[data-action="toggle-mobile-filters"]');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      // 创建移动端侧边栏（如果还未存在）
      let mobileSheet = document.getElementById('mobile-filters-sheet');
      
      if (!mobileSheet) {
        const sidebar = document.querySelector('aside');
        if (sidebar) {
          mobileSheet = document.createElement('div');
          mobileSheet.id = 'mobile-filters-sheet';
          mobileSheet.className = 'fixed inset-0 z-50 md:hidden';
          mobileSheet.innerHTML = `
            <div class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50 overflow-y-auto">
              ${sidebar.innerHTML}
            </div>
            <div class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          `;
          document.body.appendChild(mobileSheet);
          
          // 点击背景关闭
          const backdrop = mobileSheet.querySelector('.bg-black');
          if (backdrop) {
            backdrop.addEventListener('click', () => {
              mobileSheet?.remove();
            });
          }
        }
      } else {
        mobileSheet.remove();
      }
    });
  }
}

/**
 * 获取当前活跃的筛选条件
 */
function getCurrentFilters(): Record<string, any> {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  
  return {
    timePeriod: params.get('timePeriod'),
    category: params.getAll('category') || [],
    complexity: params.get('complexity'),
    price: params.get('price') || 'all',
    sortBy: params.get('sortBy') || 'date',
  };
}

/**
 * 更新 URL 查询参数
 */
function updateURL(filters: Record<string, any>): void {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  
  // 清除现有参数
  ['timePeriod', 'category', 'complexity', 'price', 'sortBy'].forEach(key => {
    params.delete(key);
  });
  
  // 添加新参数
  if (filters.timePeriod) {
    params.set('timePeriod', filters.timePeriod);
  }
  
  if (Array.isArray(filters.category) && filters.category.length > 0) {
    filters.category.forEach((cat: string) => {
      params.append('category', cat);
    });
  }
  
  if (filters.complexity) {
    params.set('complexity', filters.complexity);
  }
  
  if (filters.price && filters.price !== 'all') {
    params.set('price', filters.price);
  }
  
  if (filters.sortBy && filters.sortBy !== 'date') {
    params.set('sortBy', filters.sortBy);
  }
  
  // 构建干净的URL，避免末尾多余的'?'
  let cleanUrl = url.pathname;
  const queryString = params.toString();
  if (queryString) {
    cleanUrl += '?' + queryString;
  }
  
  window.history.pushState({}, '', cleanUrl);
}

/**
 * 获取并更新筛选计数
 */
async function updateFilterCounts(filters: Record<string, any>): Promise<void> {
  try {
    const response = await fetch('/api/filter-counts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timePeriod: filters.timePeriod,
        category: filters.category?.[0], // 只发送第一个分类
        complexity: filters.complexity,
        price: filters.price,
      }),
    });

    if (!response.ok) {
      console.error('Failed to fetch filter counts');
      return;
    }

    const counts = await response.json();
    updateCountDisplay(counts);
  } catch (error) {
    console.error('Error updating filter counts:', error);
  }
}

/**
 * 更新计数显示
 */
function updateCountDisplay(counts: Record<string, any>): void {
  // 更新时间段计数
  Object.entries(counts.timePeriods || {}).forEach(([key, count]) => {
    const element = document.querySelector(`[data-filter="timePeriod"][value="${key}"]`);
    if (element && element.parentElement) {
      const countSpan = element.parentElement.querySelector('.count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      }
    }
  });

  // 更新分类计数
  Object.entries(counts.categories || {}).forEach(([key, count]) => {
    const element = document.querySelector(`[data-filter="category"][value="${key}"]`);
    if (element && element.parentElement) {
      const countSpan = element.parentElement.querySelector('.count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      }
    }
  });

  // 更新复杂度计数
  Object.entries(counts.complexities || {}).forEach(([key, count]) => {
    const element = document.querySelector(`[data-filter="complexity"][value="${key}"]`);
    if (element && element.parentElement) {
      const countSpan = element.parentElement.querySelector('.count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      }
    }
  });

  // 更新价格计数
  Object.entries(counts.price || {}).forEach(([key, count]) => {
    const element = document.querySelector(`[data-filter="price"][value="${key}"]`);
    if (element && element.parentElement) {
      const countSpan = element.parentElement.querySelector('.count');
      if (countSpan) {
        countSpan.textContent = `(${count})`;
      }
    }
  });
}

// 在文档加载时初始化
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilterSidebar);
  } else {
    initFilterSidebar();
  }
}
