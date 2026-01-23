# Analyze trending YouTube videos with Apify, OpenAI, and Google Sheets

> ### ⚙️ Trending YouTube Videos Research Workflow: 

### 🧑‍💻 Author: [Leewei]

- Automates scraping trending videos based on a keyword, filters high-potential ones, analyzes thumbnails and transcripts with AI, generates optimized titles and outlines, and updates a Google Sheet for content ideas.
---

### 🚀 Steps to Connect:

1. **Apify API Token**
    - Sign up for a free account at [Apify](https://apify.com/) and generate your API token.
    - Paste the token into the two **HTTP Request** nodes (replace `&lt;token&gt;` in the Authorization header).
    - 💡 This enables scraping YouTube video data and transcripts—setup takes about 5 minutes.

2. **OpenAI API Key**
    - Go to [OpenAI](https://platform.openai.com/) and generate your API key.
    - Add it to the credentials for the **YouTube Title Generator**, **Analyze Thumbnail**, and **Outline Generator** nodes.
    - 💡 Use models like GPT-4o-mini for thumbnail analysis and title/outline generation.

3. **Google Sheets Credentials**
    - Set up OAuth2 credentials in n8n for Google Sheets with access to your Drive.
    - Update the `documentId` in the **Step 1 Results**, **Find Duplicate Entries**, and **Update Rows** nodes to your own Google Sheet ID (clone the provided sheet if needed).
    - 💡 This stores filtered video data, AI-generated titles, and outlines—expect 10-15 minutes for auth setup.

4. **(Optional) Customize Form Trigger**
    - If deploying publicly, no changes needed—the form prompts for "Keyword or Topic" to start the search.
    - Test with a sample keyword like "AI automation" to see results in your sheet.

---



## 📊 Basic Information

- **Workflow ID:** 8023
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 580
- **Downloads:** 58
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8023)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **merge** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **httpRequest** (×2)
- **stickyNote** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
