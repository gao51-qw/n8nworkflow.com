*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Capture More Traffic: AI-Mapped Topics & Keywords
Stay ahead of competitors by uncovering their content strategies automatically. This workflow crawls competitor websites, extracts structured topic hierarchies, entities, and depth scores, and delivers actionable insights directly into Google Sheets. No more manual browsing, just clean, analyzable data you can act on.

## Benefits
- **Competitor mapping at scale**  Automatically map sites into hierarchical topics and entities.
- **Data-driven content strategy**  Identify gaps, weak spots, and opportunities to stand out.
- **Seamless integration**  Results flow straight into Google Sheets for filtering, charting, or export.
- **Time & resource savings**  Eliminate copy-paste research and focus on strategy.

## Target audience
- SEO specialists and digital marketers
- Content strategists and copywriters
- Agencies running content audits
- SaaS startups monitoring competition
- E-commerce teams benchmarking rivals

## Required APIs
- Google Sheets credentials (trigger & save)
- Apify API token (crawler)
- Gemini (Google Generative AI) key (content parsing)

## Easy customization
- **Competitor domains:** Update in the Google Sheets config.
- **Crawl depth & limits:** Adjust `max_pages_num` and `crawl_depth_num`.
- **Output format:** Modify the Code node to add or remove Google Sheets columns.
- **Delivery channels:** Add Slack or Email nodes for instant audit reports.