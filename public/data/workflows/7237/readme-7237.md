# Detect cannibalized keywords and competing pages with Google Search Console

> # Find Cannibalized Pages (Google Search Console)

This n8n template helps you **detect page cannibalization** in Google Search Console (GSC): situations where **multiple pages** on your site rank for the **same query** and **more than one page gets clicks**. Use it to spot competing URLs, consolidate content, improve internal linking, and protect your CTR/rankings.

---

## Good to know
- **Data source:** Google Search Console Search Analytics (Dimensions: `query`, `page`).
- **Scope:** Defaults to **last 12 months** and up to **10,000 rows** per run (adjustable).
- **Logic:** Keeps only queries with **&gt;1 page** and where the **second page has clicks &gt; 0** → higher confidence of true cannibalization.
- **Privacy:** Template ships with a placeholder property (`sc-domain:example.com`) and a neutral credential name; replace both after import.
- **Cost:** n8n nodes used here are free. GSC usage is also free (subject to Google limits).

---

## How it works
1. **Manual Start** — run the workflow on demand.  
2. **Google Search Console** — fetch last 12 months of query–page rows.  
3. **Summarize** — group by `query`, building two arrays:  
   - `appended_page[]` → all pages seen for that query  
   - `appended_clicks[]` → clicks for each page-query row (aligned with `appended_page`)
4. **Filter** — pass only queries where:  
   - `count_query &gt; 1` (more than one page involved), and  
   - `appended_clicks[1] &gt; 0` (the second page also received clicks)
5. **Output** — list of **cannibalized queries** with the **competing pages** and their click counts.

**Example output**
```json
{
  "query": "best running shoes",
  "appended_page": [
    "https://example.com/blog/best-running-shoes",
    "https://example.com/guide/running-shoes-2025"
  ],
  "appended_clicks": [124, 37],
  "count_query": 3
}
```
## How to use
1. Import the JSON into n8n.  
2. Open the **Google Search Console** node and:  
   - Connect your **Google Search Console OAuth2** credential.  
   - Replace `siteUrl` with your property (`sc-domain:your-domain.com`).  
3. Press **Execute Workflow** on **Manual Start**.  
4. Review the output — focus on queries where the second page has meaningful clicks.  

💡 **Tip:** If your site is large, start with a shorter date range (e.g., 90 days) or raise `rowLimit`.

---

## Requirements
- Access to the target property in **Google Search Console**.  
- One **Google Search Console OAuth2** credential in n8n.

---

## Customising this workflow
- **More robust detection:** In the **Summarize** node, change `clicks` aggregation from `append` to `sum`. Then filter for “**at least 2 pages with `sum_clicks &gt; 0`**” to avoid any dependency on row order.  
- **Scoring & sorting:** Add a **Code/Function** node to sort competing pages by clicks or impressions and compute click-share per page.  
- **Deeper analysis:** Include `impressions` and `position` in the GSC node and extend the summary to prioritize fixes (e.g., high impressions + split clicks).  
- **Reporting:** Send results to **Google Sheets** or export a **CSV**; create a dashboard of top cannibalized queries.  
- **Thresholds:** Expose minimum click thresholds as **workflow variables** (e.g., second page clicks ≥ 3) to reduce noise.

---

## Troubleshooting
- **Empty results:** Widen date range, increase `rowLimit`, or temporarily relax the filter (remove the second-page click condition to validate data flow).  
- **No property data:** Ensure you used `sc-domain:` vs. `https://` property format correctly and that your user has GSC access.  
- **Credential issues:** Reconnect the OAuth2 credential and reauthorize if needed.


## 📊 Basic Information

- **Workflow ID:** 7237
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7237)

## 👤 Author

- **Name:** Mohammadreza azari
- **Username:** @mrazari

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **start** 
- **n8n-nodes-google-search-console.googleSearchConsole** 
- **summarize** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
