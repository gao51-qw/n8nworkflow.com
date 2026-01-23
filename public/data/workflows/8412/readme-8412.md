# Website & API health monitoring system with HTTP status validation

> ## Website & API Health Monitoring System with HTTP Status Validation

## How it works
- Performs HTTP health checks on websites and APIs with automatic health status validation
- Checks HTTP status codes and analyzes JSON responses for common health indicators
- Returns detailed status information including response times and health status
- Implements conditional logic to handle different response scenarios
- Perfect for monitoring dashboards, alerts, and automated health checks

## Set up steps
- Deploy the workflow and activate it
- Get the webhook URL from the trigger node
- Configure your monitoring system to call the webhook endpoint
- Send POST requests with target URLs for health monitoring
- Receive JSON responses with health status, HTTP codes, and timestamps

## Usage
- Send POST requests to the webhook URL with target URL parameter
- Optionally configure timeout and status expectations in request body
- Receive JSON responses with health status, HTTP codes, and timestamps  
- Perfect for monitoring dashboards, alerts, and automated health checks
- Use with external monitoring tools like Nagios, Zabbix, or custom dashboards
- Set up scheduled monitoring calls for continuous health validation
- Example request: Send POST with `{"url": "https://your-site.com", "timeoutMs": 5000}`
- Success response returns: `{"ok": true, "statusCode": 200, "healthStatus": "ok"}`
- Failure response returns: `{"ok": false, "error": "Health check failed", "statusCode": 503}`

## Benefits
- Proactive monitoring to identify issues before they impact users
- Detailed diagnostics with comprehensive health data for troubleshooting
- Integration ready - works with existing monitoring and alerting systems
- Customizable timeout settings, expected status codes, and health indicators
- Scalable solution to monitor multiple services with single workflow endpoint

## Use Cases
- E-commerce platforms: Monitor payment APIs, inventory systems, user authentication
- Microservices: Health validation for distributed service architectures
- API gateways: Endpoint monitoring with response time validation
- Database connections: Track connectivity and performance metrics
- Third-party integrations: Monitor external API dependencies and SLA compliance

## Target Audience
- DevOps Engineers implementing production monitoring
- System Administrators managing server uptime
- Site Reliability Engineers building monitoring systems
- Development Teams tracking API health in staging/production
- IT Support Teams for proactive issue detection

## 📊 Basic Information

- **Workflow ID:** 8412
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 847
- **Downloads:** 84
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8412)

## 👤 Author

- **Name:** Ibrahim Emre POLAT
- **Username:** @epolat

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **httpRequest** 
- **if** (×2)
- **code** (×4)
- **respondToWebhook** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
