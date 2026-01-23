# Convert markdown to formatted Notion pages with Mark2Notion

> Transform markdown text into beautifully formatted Notion pages using the Mark2Notion API. This workflow handles all the complexity of Notion's block structure, including tables, nested lists, code blocks, and special formatting.

## What this template does
This workflow takes any markdown-formatted text and automatically converts it into properly structured Notion blocks, then appends it to your specified Notion page. It handles all of Notion's API limitations automatically, including:
- Chunking content over 100 blocks
- Splitting text over 2000 characters
- Rate limiting and retry logic
- Complex table structures
- Nested lists, including 3+ level of nesting

## Use Cases
- **AI Content Publishing**: Send ChatGPT, Claude, or other LLM outputs directly to your Notion documentation
- **Form to Documentation**: Convert form submissions into formatted project pages
- **GitHub to Notion**: Sync issues, PRs, or README files to your team wiki
- **Meeting Notes Automation**: Transform transcripts into structured meeting notes
- **Report Generation**: Create beautiful reports from data sources

## How to use this template
1. **Get your Mark2Notion API key** at [https://mark2notion.com](https://mark2notion.com) (free tier includes 100 requests/month)
2. **Create a Notion integration** at https://notion.so/my-integrations and copy the token
3. **Add connection to the integration** on your Notion page
4. **Copy your page ID** from the Notion page URL
5. **Configure the HTTP Request node** with your credentials. Use "x-api-key" header name for Mark2Notion Header Auth.
6. **Test with sample markdown** to see the result

## More Information

- Full API documentation: [https://docs.mark2notion.com](https://docs.mark2notion.com)
- Quickstart guide: [https://mark2notion.com/guides/quickstart](https://mark2notion.com/guides/quickstart)
- Feedback and support: [https://github.com/elitemaks/mark2notion-api](https://github.com/elitemaks/mark2notion-api)


## 📊 Basic Information

- **Workflow ID:** 8331
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 290
- **Downloads:** 29
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8331)

## 👤 Author

- **Name:** Max
- **Username:** @elitemaks

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **notion** 
- **set** 
- **stickyNote** (×4)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
