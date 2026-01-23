# Auto-Audit SEO Traffic Drops with AI & GSC

Automatically monitor your Google Search Console data to catch SEO performance drops before they become critical. This workflow identifies pages losing rankings and clicks, scrapes the live content, and uses AI to analyze the gap between "Search Queries" (User Intent) and "Page Content" (Reality). It then delivers actionable fixes—including specific Title rewrites and missing H2 headings—directly to Slack.

Ideal for SEO managers, content marketers, and site owners who want a pro-level SEO consultant running 24/7 on autopilot.

## How it works
1. **Compare & Detect:** Compares last month's GSC performance with the previous month to identify pages with declining traffic.
2. **Deep Dive:** For each struggling page, it fetches the top search queries and scrapes the actual Title and H2 tags from your live website.
3. **AI Analysis:** An AI Agent analyzes *why* the page is failing by comparing user intent vs. actual content.
4. **Report:** Sends a "Consultant-style" report to Slack with quantitative data and specific improvement tasks (e.g., "Add this H2 heading").

## Set up steps
1. **Configure:** Open the `📝 Edit Me: Config` node and enter your GSC Property URL (e.g., `sc-domain:example.com`).
2. **Connect Credentials:**
    * **Google Search Console:** To fetch performance data.
    * **OpenAI:** To analyze content and generate ideas.
    * **Slack:** To receive the weekly reports.
3. **Activate:** Turn on the workflow to receive your SEO audit every Monday morning.