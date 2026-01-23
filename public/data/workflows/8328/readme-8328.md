# Monitor website performance with PageSpeed Insights and send alerts

> # Monitor website performance with PageSpeed Insights and save to Google Sheets with alerts

This n8n template automatically monitors website performance using Google's PageSpeed Insights API, compiles detailed reports, and tracks performance trends over time in Google Sheets.

**Use cases:** Agency client monitoring, competitor analysis, performance regression detection, SEO reporting, site migration monitoring, A/B testing performance impact, and maintaining performance SLAs.

## Who's it for
- Digital agencies monitoring client websites
- SEO professionals tracking site performance
- DevOps teams maintaining performance SLAs
- Business owners wanting automated site monitoring

## How it works
- **Automated Testing:** Scheduled audits of multiple websites using PageSpeed Insights API
- **Core Web Vitals:** Tracks LCP, FID, CLS, and overall performance scores
- **Historical Tracking:** Maintains performance history for trend analysis
- **Alert System:** Sends notifications when performance drops below thresholds
- **Detailed Reporting:** Captures specific recommendations and optimization opportunities

## Two Workflow Paths
1. **Scheduled Audit:** Automatically tests all URLs from Google Sheet on schedule
2. **On-Demand Testing:** Webhook endpoint for immediate single-URL testing

## How to set up
1. Get a free PageSpeed Insights API key from Google Cloud Console
2. Create Google Sheet with columns: URL, Site Name, Category, Alert Threshold, Last_Processed_Date and Device.
3. Set up Google Sheets API credentials
4. Configure notification preferences (Slack, email, etc.)
5. Set audit schedule (daily, weekly, or custom)
6. Define performance thresholds for alerts

## Requirements
- Google PageSpeed Insights API key (free)
- Google Sheets API access
- n8n instance (cloud or self-hosted)
- Optional: Slack/email for notifications

## Google Sheet Structure
**Input Sheet ("sites"):**
- URL, Site_Name, Category, Alert_Threshold, Last_Processed_Date and Device.

**Results Sheet ("audit_results"):**
- Date, URL, Site_Name, Device, Performance_Score, LCP, FID, CLS, Recommendations, Full_Report_URL

## API Usage (On-Demand)
POST to webhook:
```json
{
  "url": "https://example.com",
  "site_name": "Example Site",
  "alert_threshold": 75
}
```

## How to customize
- Add custom performance thresholds per site
- Include additional metrics (accessibility, SEO, best practices)
- Connect to other dashboards (Data Studio, Grafana)
- Add competitor benchmarking
- Integrate with project management tools for issue tracking
- Set up different notification channels based on severity
- Sample Google Sheet Included

## 📊 Basic Information

- **Workflow ID:** 8328
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1039
- **Downloads:** 103
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8328)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** 
- **httpRequest** (×2)
- **code** (×3)
- **respondToWebhook** 
- **webhook** 
- **googleSheets** (×3)
- **if** 
- **scheduleTrigger** 
- **gmail** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
