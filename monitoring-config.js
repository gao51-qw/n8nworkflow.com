// Monitoring configuration for N8N Workflows
module.exports = {
  // Error tracking configuration
  errorTracking: {
    enabled: process.env.NODE_ENV === 'production',
    service: process.env.ERROR_TRACKING_SERVICE || 'sentry',
    dsn: process.env.ERROR_TRACKING_DSN,
    environment: process.env.NODE_ENV || 'development',
    release: process.env.RELEASE_VERSION || '1.0.0',
    tracesSampleRate: parseFloat(process.env.ERROR_TRACKING_SAMPLE_RATE) || 1.0,
    replaysSessionSampleRate: parseFloat(process.env.ERROR_TRACKING_REPLAY_RATE) || 0.1,
    replaysOnErrorSampleRate: parseFloat(process.env.ERROR_TRACKING_ERROR_REPLAY_RATE) || 1.0
  },
  
  // Performance monitoring configuration
  performanceMonitoring: {
    enabled: process.env.NODE_ENV === 'production',
    service: process.env.PERFORMANCE_MONITORING_SERVICE || 'lighthouse',
    sampleRate: parseFloat(process.env.PERFORMANCE_SAMPLE_RATE) || 0.1,
    thresholds: {
      lcp: 2500, // Largest Contentful Paint in ms
      fid: 100,  // First Input Delay in ms
      cls: 0.1,  // Cumulative Layout Shift
      tbt: 200,  // Total Blocking Time in ms
      tti: 3800  // Time to Interactive in ms
    }
  },
  
  // Alerting configuration
  alerts: {
    errorThresholds: {
      critical: 10,  // Critical errors per minute
      warning: 5,   // Warning errors per minute
      info: 1       // Info errors per minute
    },
    
    notificationChannels: {
      email: process.env.ALERT_EMAIL || 'alerts@n8nworkflow.com',
      slack: process.env.ALERT_SLACK_WEBHOOK,
      discord: process.env.ALERT_DISCORD_WEBHOOK,
      sms: process.env.ALERT_SMS_NUMBER
    },
    
    escalationPolicy: {
      immediate: ['critical'],
      '5-minutes': ['warning'],
      '15-minutes': ['info']
    }
  },
  
  // Health check configuration
  healthChecks: {
    endpoints: [
      '/api/health',
      '/api/status',
      '/api/ready'
    ],
    interval: process.env.HEALTH_CHECK_INTERVAL || 60000, // 60 seconds
    timeout: process.env.HEALTH_CHECK_TIMEOUT || 5000,    // 5 seconds
    maxRetries: parseInt(process.env.HEALTH_CHECK_RETRIES) || 3
  },
  
  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
    retentionDays: parseInt(process.env.LOG_RETENTION_DAYS) || 30,
    maxFileSize: process.env.LOG_MAX_FILE_SIZE || '10m'
  }
};