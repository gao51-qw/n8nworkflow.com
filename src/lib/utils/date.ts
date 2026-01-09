/**
 * 日期格式化工具函数
 */

/**
 * 格式化日期为相对时间（如 "2 days ago"）
 * @param date - 日期字符串或 Date 对象
 * @returns 格式化后的相对时间字符串
 */
export function formatRelativeTime(date: string | Date): string {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  // 小于 1 分钟
  if (diffInSeconds < 60) {
    return 'just now';
  }

  // 小于 1 小时
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }

  // 小于 1 天
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  }

  // 小于 30 天
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  }

  // 小于 12 个月
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
  }

  // 超过 1 年
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
}

/**
 * 格式化日期为简短格式（如 "2 Jan 2026"）
 * @param date - 日期字符串或 Date 对象
 * @returns 格式化后的日期字符串
 */
export function formatShortDate(date: string | Date): string {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  
  const day = targetDate.getDate();
  const month = targetDate.toLocaleString('en-US', { month: 'short' });
  const year = targetDate.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * 格式化日期为完整格式（如 "January 2, 2026"）
 * @param date - 日期字符串或 Date 对象
 * @returns 格式化后的日期字符串
 */
export function formatLongDate(date: string | Date): string {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  
  return targetDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 格式化日期为 ISO 格式（用于 SEO）
 * @param date - 日期字符串或 Date 对象
 * @returns ISO 格式的日期字符串
 */
export function formatISODate(date: string | Date): string {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  return targetDate.toISOString();
}

/**
 * 检查日期是否在指定天数内
 * @param date - 日期字符串或 Date 对象
 * @param days - 天数
 * @returns 是否在指定天数内
 */
export function isWithinDays(date: string | Date, days: number): boolean {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const diffInDays = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
  
  return diffInDays <= days;
}

/**
 * 获取日期的年月日
 * @param date - 日期字符串或 Date 对象
 * @returns 包含年月日的对象
 */
export function getDateParts(date: string | Date): {
  year: number;
  month: number;
  day: number;
} {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  
  return {
    year: targetDate.getFullYear(),
    month: targetDate.getMonth() + 1,
    day: targetDate.getDate(),
  };
}
