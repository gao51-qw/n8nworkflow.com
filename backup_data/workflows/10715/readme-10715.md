# Marketing analytics reports with Google Analytics, Sheets, Slides & email alerts

> ## Automate and Distribute Weekly and Monthly Marketing Analytics Reports

### Who's it for?
This workflow is designed for marketing teams, data analysts, and business owners who need to consistently track key performance indicators (KPIs). It saves hours of manual data collection and reporting, ensuring stakeholders receive timely updates automatically.

### What it does
This workflow automates the entire process of creating and distributing regular analytics reports. On a recurring weekly and monthly schedule, it:
1.  **Fetches Data:** Gathers the latest data from Google Analytics (users, sessions, conversions), your advertising platform (ad spend), and your CRM (new customers, revenue).
2.  **Calculates KPIs:** Processes the raw data to calculate essential business metrics, including Monthly Active Users (MAU), Customer Acquisition Cost (CAC), Lifetime Value (LTV), LTV:CAC ratio, and conversion rates.
3.  **Logs Historical Data:** Appends the newly calculated KPIs to a Google Sheet, creating a historical record for trend analysis.
4.  **Generates a Report:** Creates a new Google Slides presentation to serve as the main report.
5.  **Distributes the Report:** Emails a summary of the key metrics to a predefined list of recipients, including a link to the full Google Slides report.
6.  **Provides Error Alerts:** If any step in the process fails, it sends an immediate notification to a designated Slack channel so you can address the issue quickly.

### How to set up
1.  **Configure Credentials:** Add your credentials for Google Analytics, Google Sheets, Google Slides, Gmail, Slack, and the HTTP Request nodes (for your ad platform and CRM).
2.  **Fill in Placeholders:** In the "Workflow Configuration" node, replace all placeholder values with your specific information:
    *   `gaPropertyId`: Your Google Analytics Property ID.
    *   `adPlatformApiUrl`: The API endpoint for your advertising platform.
    *   `crmApiUrl`: The API endpoint for your CRM.
    *   `reportSpreadsheetId`: The ID of the Google Sheet where data will be stored.
    *   `slidesTemplateId`: The ID of your Google Slides report template.
    *   `reportRecipients`: A comma-separated list of email addresses for report distribution.
    *   `slackChannel`: The Slack channel ID for error notifications.
3.  **Activate Workflow:** Turn the workflow on. It will now run based on the schedule defined in the "Weekly/Monthly Schedule" trigger node.

### How to customize the workflow
*   **Adjust Schedule:** Modify the "Weekly/Monthly Schedule" node to change the reporting frequency (e.g., daily, bi-weekly).
*   **Change Reporting Period:** In the "Workflow Configuration" node, change the `reportPeriodDays` value to adjust the lookback window (e.g., set to `30` for a monthly report).
*   **Customize KPIs:** Edit the Javascript in the "Calculate KPIs (MAU, LTV, CAC)" node to add or modify metrics.
*   **Enhance the Report:** Expand the "Create Google Slides Report" node to dynamically add charts and data from the calculated KPIs into the slides.

## 📊 Basic Information

- **Workflow ID:** 10715
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 311
- **Downloads:** 31
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10715)

## 👤 Author

- **Name:** 對馬　瑠斗
- **Username:** @tsushimaryuto2

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **googleAnalytics** 
- **httpRequest** (×2)
- **code** 
- **googleSheets** 
- **googleSlides** 
- **if** 
- **gmail** 
- **slack** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
