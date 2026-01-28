# Monitor brand reputation for negative PR on Reddit with Gemini + LangChain + Sheets

> # [🎥 Watch the Full Execution on YouTube](https://youtu.be/_VAOeIzC6M0?si=etrUjAGyzwXTiZ6D)

# **Workflow Description (in-depth):**

This workflow automates the entire process of **monitoring online reputation** by scanning Reddit posts for negative sentiment about your company, filtering only the relevant criticism, and logging it directly into Google Sheets for easy tracking.

### 🔑 **Key Features:**

* **Automated Triggering:**
  Runs on a schedule so you never miss new discussions about your brand.

* **Smart Data Fetching:**
  Uses Reddit API to pull the latest posts matching your chosen keywords (e.g., “Notion”).

* **Post Processing:**
  Breaks down bulk Reddit responses into individual posts for analysis.

* **AI-Powered Filtering:**
  A custom-built AI agent reviews the content and extracts only **genuine negative PR** (complaints, bad experiences, harmful mentions). Neutral or positive posts are ignored.

* **Structured Parsing:**
  AI responses are enforced into a clean JSON schema (ID, Title, URL, NegativeContent).... ensuring compatibility with downstream nodes.

* **Noise Reduction:**
  A code node ensures only posts with meaningful content are passed forward.

* **Centralized Logging:**
  Captures critical information (post title, negative excerpt, URL, ID) into Google Sheets.... giving teams a live dashboard of issues to address.

* **Customizable & Scalable:**
  Swap out “Notion” for your own brand, or expand to other platforms.... the flow adapts without extra overhead.

### 🚀 **Why This Matters:**

In 2025, a single Reddit thread can shape brand reputation overnight. Manually monitoring is inefficient, and traditional social listening tools generate too much noise. This workflow gives you a **lean, automated, AI-powered system** to stay ahead of potential PR risks.

### 🛠️ **Tech Stack:**

* **n8n** for automation
* **Reddit API** for data fetching
* **LangChain AI Agent + Google Vertex Model** for sentiment & context analysis
* **Google Sheets** for reporting & tracking

## 📊 Basic Information

- **Workflow ID:** 7473
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 77
- **Downloads:** 7
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7473)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **splitOut** 
- **googleSheets** 
- **code** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleVertex** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
