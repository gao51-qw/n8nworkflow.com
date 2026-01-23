# YouTube trends finding agent

> **Who this is for**

This workflow is for **content creators**, **digital marketers**, or **YouTube strategists** who want to **automatically discover trending videos** in their niche, analyze engagement metrics, and get **data-driven insights** for their content strategy — all from one simple form submission.

**What this workflow does**

This workflow starts every time someone submits the **YouTube Trends Finder Form**. It then:
* **Searches YouTube videos** based on your topic and specified time range using the **YouTube Data API**.
* **Fetches detailed analytics** (views, likes, comments, engagement rates) for each video found.
* **Calculates engagement rates** and filters out low-performing content (below 2% engagement).
* **Applies smart filters** to exclude videos with less than 1000 views, content outside your timeframe, and hashtag-heavy titles.
* **Removes duplicate videos** to ensure clean data.
* **Creates a Google Spreadsheet** with all trending video data organized by performance metrics.
* **Delivers the results** via a completion form with a direct link to your analytics report.

**Setup**

To set this workflow up:
1. **Form Trigger** – Customize the "YouTube Trends Finder" form fields if needed (Topic Name, Last How Many Days).
2. **YouTube Data API** – Add your YouTube OAuth2 credentials and API key in the respective nodes.
3. **Google Sheets** – Connect your Google Sheets account for automatic report generation.
4. **Engagement Filters** – Adjust the 2% engagement rate threshold based on your quality standards.
5. **View Filters** – Modify the minimum view count (currently 1000+) in the filter conditions.
6. **Regional Settings** – Update the region code (currently "US") to target specific geographic markets.

**How to customize this workflow to your needs**
* Change the **engagement rate threshold** to be more or less strict based on your niche requirements.
* Add **additional filters** like video duration, subscriber count, or specific keywords to refine results.
* Modify the **Google Sheets structure** to include extra metrics like "Channel Name", "Video Duration", or "Trending Score".
* Switch to **different output formats** like CSV export or direct email reports instead of Google Sheets.

## 📊 Basic Information

- **Workflow ID:** 7888
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2655
- **Downloads:** 265
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7888)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **youTube** 
- **formTrigger** 
- **set** (×3)
- **code** 
- **noOp** (×2)
- **googleSheets** (×2)
- **form** 
- **httpRequest** 
- **if** (×2)
- **removeDuplicates** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
