# Automated SEO performance collection from Google Search Console to NocoDB

> ### Problem

Monitoring SEO performance from Google Search Console (GSC) manually is repetitive and prone to human error. For marketers or analysts managing multiple domains, checking reports manually and copying data into spreadsheets or databases is time-consuming. There is a strong need for an automated solution that collects, stores, and updates SEO metrics regularly for easier analysis and dashboarding.

### Solution

This workflow automatically pulls performance metrics from Google Search Console — including queries, pages, CTR, impressions, positions, and devices — and stores them in a structured format inside a NocoDB table. It’s ideal for SEO specialists, marketing teams, or data analysts who need to automate SEO reporting and centralize data for analytics or dashboards (like Superset or Metabase).

### Setup Instructions

1. **Authorize your Google Search Console account**  
   Connect via OAuth2 (requires GSC API access).

2. **Create a NocoDB table**  
   Define fields to match GSC response:
   - `query` (text)
   - `page` (URL)
   - `device` (text)
   - `clicks` (number)
   - `impressions` (number)
   - `ctr` (percentage)
   - `position` (number)

3. **Add credentials in n8n**  
   Use credential nodes for both:
   - Google OAuth2
   - NocoDB API Token

4. **Customize schedule trigger**  
   Set the frequency (e.g., weekly) and adjust the domain/date range as needed.

5. **Generalize domains**  
   Replace specific domains like `martechmafia.net` with `your-domain.com` before submission.

### NocoDB Table Structure

The NocoDB table must match the fields coming from GSC's Search Analytics API. Here's a sample schema:
```json
{
  "query": "string",
  "page": "string",
  "device": "string",
  "clicks": "number",
  "impressions": "number",
  "ctr": "number",
  "position": "number"
}


## 📊 Basic Information

- **Workflow ID:** 3721
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1519
- **Downloads:** 151
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3721)

## 👤 Author

- **Name:** Martech Mafia
- **Username:** @martechmafia

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **nocoDb** 
- **stickyNote** (×4)
- **scheduleTrigger** 
- **httpRequest** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
