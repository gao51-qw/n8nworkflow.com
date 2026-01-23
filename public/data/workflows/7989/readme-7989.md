# Website SEO health analytics with Google Sheets, PDF reports & Gmail alerts

> # Automated SEO Health Monitoring & Reporting

This workflow automatically monitors the SEO health of websites stored in a Google Sheet. It fetches each website’s HTML, analyzes key SEO metrics (title, meta description, H1 count, canonical, robots, performance score, etc.) and updates results back into Google Sheets. If performance is poor (&lt;50), it sends an alert email. For healthy sites, it generates a detailed PDF report and stores it in Google Drive.

## Who’s it for

* Digital marketing teams
* SEO agencies
* Website administrators who want automated SEO health checks
* Businesses with multiple websites or landing pages to monitor

## How it works

1. **Daily Trigger** – Runs every day at 9 AM.
2. **Fetch Website List** – Reads website URLs from Google Sheets.
3. **Crawl Websites** – Uses HTTP requests to fetch each website’s HTML.
4. **SEO Analysis** – Extracts SEO-related metadata (title, meta description, H1, etc.).
5. **Health Check** – Scores SEO performance based on predefined rules.
6. **Decision Node** – If score &lt; 50 → Send alert email; else → Generate full SEO report.
7. **Update Logs** – Logs results back into Google Sheets.
8. **Generate PDF Reports** – Converts HTML reports into PDFs via PDF.co API.
9. **Save to Drive** – Stores the PDF reports in Google Drive for long-term access.

## How to set up

1. Open n8n and import the workflow.
2. Configure your **Google Sheets** credentials and specify the sheet containing your website URLs.
3. Add your **Gmail** account to allow automated alert emails.
4. Set up your **Google Drive** credentials for storing PDF reports.
5. Obtain an **API key from PDF.co** and configure the HTTP Request node.
6. Adjust the **Schedule Trigger** to the time that works best (default: 9 AM daily).
7. Test the workflow with a sample domain list.

## Requirements

* n8n instance (self-hosted or cloud)
* Google Sheets account (to store website URLs and logs)
* Gmail account (for sending alerts)
* Google Drive account (to save SEO reports)
* PDF.co API Key (for HTML → PDF conversion)

## How to customize

* **Change performance threshold**: Modify the IF node condition (default &lt;50).
* **Custom SEO rules**: Edit the “SEO Health Check” Function node to add/remove checks (e.g., missing schema tags, page load times).
* **Different output storage**: Replace Google Drive with Dropbox, S3 or OneDrive.
* **Alternate notification channels**: Swap Gmail with Slack, Microsoft Teams or Telegram.

## Add-ons

* Send Slack/Teams notifications for low scores.
* Add PageSpeed Insights API for performance scoring.
* Generate weekly summary reports per domain.
* Integrate with Notion/Confluence to log SEO health history.

## Use Case Examples

* An SEO agency monitors **100+ client websites** daily and sends alerts when a site has poor SEO signals.
* A company’s **marketing manager** gets a daily SEO health PDF report stored in Drive.
* A SaaS product team automatically logs performance changes for each release.

## Common Troubleshooting

| **Issue** | **Possible Cause** | **Solution** |
| ------------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------- |
| Workflow fails at **HTTP Crawl** | Website blocks requests / timeout | Increase timeout in Set Config node or add retry logic. |
| Always returns `https://example.com` | Missing canonical / OG tags in HTML | Enhanced code now infers from JSON-LD or domain detection. Update analyzer. |
| PDF not generated | Invalid API key or wrong endpoint in PDF.co node | Verify PDF.co API key and endpoint URL. |
| Email not sending | Gmail credentials not set or blocked | Reconnect Gmail in n8n credentials manager. |
| Google Sheet not updating | Wrong column mapping in Update Sheet node | Check node mapping: domain column vs performance/date columns. |
| Google Drive upload fails | Missing folder permissions | Ensure correct Drive folder ID and credentials. |

## Need Help?

If you’d like assistance setting up, customizing or scaling this workflow for your use case, our n8n automation team at WeblineIndia can help you:

* Tailor SEO rules for your industry.
* Connect to additional APIs (Ahrefs, Semrush, PageSpeed).
* Automate weekly/monthly reporting with summary dashboards.


## 📊 Basic Information

- **Workflow ID:** 7989
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 516
- **Downloads:** 51
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7989)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **cron** 
- **googleSheets** (×2)
- **set** 
- **httpRequest** (×3)
- **code** (×2)
- **if** 
- **gmail** 
- **merge** 
- **html** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
