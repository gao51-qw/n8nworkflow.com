# Generate blogs with GPT-4o prompt chaining: outline, evaluate & publish to Sheets

> **Description**

This n8n automation template delivers a full-stack AI content pipeline designed for marketing teams, content creators, SaaS founders, and growth hackers. It combines prompt chaining, GPT-4o agents, and Google Sheets to generate engaging, SEO-friendly blogs—end to end.

**What This Template Does:**

📝 Generates blog topic ideas using a domain-specific AI agent (e.g., for Sparrow API testing)
📄 Creates a blog outline with key sections and headings
✅ Evaluates & refines the outline to ensure clarity, flow, and engagement
🧾 Writes the full blog content in structured, long-form paragraphs
📥 Appends the blog to Google Sheets with the current date

**Built With:**
- GPT-4o (via Azure OpenAI)
- LangChain Agents for task-specialized prompt chaining
- Google Sheets integration for automatic publishing
- Schedule Trigger for periodic content generation

**Ideal Use Cases:**

- SaaS teams looking to scale inbound content
- API platforms (like Sparrow) publishing technical how-tos
- SEO agencies automating client blog content
- Solo founders growing product visibility via thought leadership


## 📊 Basic Information

- **Workflow ID:** 5504
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1489
- **Downloads:** 148
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5504)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×4)
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×4)
- **scheduleTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
