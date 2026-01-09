/**
 * 数字和文本格式化工具函数
 */

/**
 * 格式化数字为带千分位的字符串（如 1,234）
 * @param num - 要格式化的数字
 * @returns 格式化后的字符串
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

/**
 * 格式化数字为紧凑格式（如 1.2K, 1.5M）
 * @param num - 要格式化的数字
 * @returns 格式化后的字符串
 */
export function formatCompactNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  if (num < 1000000) {
    const thousands = num / 1000;
    return `${thousands.toFixed(thousands < 10 ? 1 : 0)}K`;
  }

  const millions = num / 1000000;
  return `${millions.toFixed(millions < 10 ? 1 : 0)}M`;
}

/**
 * 格式化价格
 * @param price - 价格数字
 * @param currency - 货币符号，默认为 '$'
 * @returns 格式化后的价格字符串
 */
export function formatPrice(price: number, currency: string = '$'): string {
  if (price === 0) {
    return 'Free';
  }

  return `${currency}${price.toFixed(2)}`;
}

/**
 * 截断文本并添加省略号
 * @param text - 要截断的文本
 * @param maxLength - 最大长度
 * @returns 截断后的文本
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength).trim() + '...';
}

/**
 * 将字符串转换为 URL 友好的 slug
 * @param text - 要转换的文本
 * @returns slug 字符串
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/[\s_-]+/g, '-') // 替换空格和下划线为连字符
    .replace(/^-+|-+$/g, ''); // 移除首尾的连字符
}

/**
 * 将 slug 转换回可读文本
 * @param slug - slug 字符串
 * @returns 可读文本
 */
export function unslugify(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * 格式化文件大小
 * @param bytes - 字节数
 * @returns 格式化后的文件大小字符串
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * 生成随机 ID
 * @param length - ID 长度，默认为 8
 * @returns 随机 ID 字符串
 */
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

/**
 * 清理 HTML 标签
 * @param html - HTML 字符串
 * @returns 纯文本
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * 转义 HTML 特殊字符
 * @param text - 要转义的文本
 * @returns 转义后的文本
 */
export function escapeHtml(text: string): string {
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
 * 格式化百分比
 * @param value - 数值（0-1 或 0-100）
 * @param decimals - 小数位数，默认为 0
 * @param isDecimal - 是否为小数形式（0-1），默认为 true
 * @returns 格式化后的百分比字符串
 */
export function formatPercentage(
  value: number,
  decimals: number = 0,
  isDecimal: boolean = true
): string {
  const percentage = isDecimal ? value * 100 : value;
  return `${percentage.toFixed(decimals)}%`;
}

/**
 * 将数组转换为逗号分隔的字符串
 * @param items - 字符串数组
 * @param maxItems - 最多显示的项数
 * @returns 格式化后的字符串
 */
export function formatList(items: string[], maxItems?: number): string {
  if (!items || items.length === 0) {
    return '';
  }

  if (maxItems && items.length > maxItems) {
    const visible = items.slice(0, maxItems);
    const remaining = items.length - maxItems;
    return `${visible.join(', ')} +${remaining} more`;
  }

  return items.join(', ');
}

/**
 * 首字母大写
 * @param text - 要处理的文本
 * @returns 首字母大写的文本
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * 每个单词首字母大写
 * @param text - 要处理的文本
 * @returns 每个单词首字母大写的文本
 */
export function titleCase(text: string): string {
  if (!text) return '';
  
  return text
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}
