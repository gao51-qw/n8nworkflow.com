# Ai-powered chart generation from web data with GPT-4o and WordPress upload

> # AI-Powered Chart Generation from Web Data 

This n8n workflow automates the process of:
1. **Scraping real-time data from the web** using GPT-4o with browsing capability
2. **Converting markdown tables into Chart.js-compatible JSON**
3. **Rendering the chart** using [QuickChart.io](https://quickchart.io)
4. **Uploading the resulting image** directly to your WordPress media library

---

## 🚀 Use Case

Ideal for content creators, analysts, or automation engineers who need to:
- Automate generation of visual reports
- Create marketing-ready charts from live data
- Streamline research-to-publish workflows

---

## 🧠 How It Works

### 1. Prompt Input
Trigger the workflow manually or via another workflow with a `prompt` string, e.g.:

Generate a graph of apple's market share in the mobile phone market in Q1 2025


---

### 2. Web Search + Table Extraction
The `Message a model` node uses GPT-4o with search to:
- Perform a real-time query
- Extract data into a markdown table
- Return the raw table + citation URLs

---

### 3. Chart Generation via AI Agent
The `Generate Chart AI Agent`:
- Interprets the table
- Picks an appropriate chart type (bar, line, doughnut, etc.)
- Outputs valid Chart.js JSON using a strict schema

---

### 4. QuickChart API Integration
The `Create QuickChart` node:
- Sends the Chart.js config to QuickChart.io
- Renders the chart into a PNG image

---

### 5. WordPress Image Upload
The `Upload image` node:
- Uploads the PNG to your WordPress media library using REST API
- Uses proper headers for filename and content-type
- Returns the media GUID and full image URL

---

## 🧩 Nodes Used

- `Manual Trigger` or `Execute Workflow Trigger`
- `OpenAI Chat Model` (GPT-4o)
- `LangChain Agent` (Chart Generator)
- `LangChain OutputParserStructured`
- `HTTP Request` (QuickChart API + WordPress Upload)
- `Code` (Final result formatting)

---

## 🗂 Output Format

The final `Code` node returns:
```json
{
  "research": { ...raw markdown table + citations... },
  "graph_data": { ...Chart.js JSON... },
  "graph_image": { ...WordPress upload metadata... },
  "result_image_url": "https://your-wordpress.com/wp-content/uploads/...png"
}
```
## ⚙️ Requirements
OpenAI credentials (GPT-4o or GPT-4o-mini)

WordPress REST API credentials with media write access

QuickChart.io (free tier works)

n8n v1.25+ recommended

## 📌 Notes
Chart style and format are determined dynamically based on your table structure and AI interpretation.

Make sure your OpenAI and WordPress credentials are connected properly.

Outputs are schema-validated to ensure reliable rendering.

## 🖼 Sample Output
![openchart graph](https://articles.emp0.com/wp-content/uploads/2025/07/chart-apple-market-share-q1-2025.png)

## 📊 Basic Information

- **Workflow ID:** 6361
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 891
- **Downloads:** 89
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6361)

## 👤 Author

- **Name:** Jay Emp0
- **Username:** @jay-emp0

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
