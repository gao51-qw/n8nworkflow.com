![ChatGPT Image 6 mai 2025, 17_58_38.png](fileId:1286)

Ask your PostgreSQL database complex questions and receive clear summaries, charts, and even update or insert data — all through one smart agent powered by n8n’s Model Context Protocol (MCP).

Supports:
- Multi-KPI insights in one prompt  
- Auto-generated QuickChart bar/pie charts  
- Natural-language inserts and updates  
- Markdown-friendly output for dashboards


---

## 🚀 Why This Version Stands Out

This version goes beyond reporting:
- 📈 Auto-generates charts (QuickChart)
- 🧮 Answers multiple KPIs in one message
- ✍️ Add and update records securely
- 🧠 Uses up to 30 planned steps for smart reasoning

💰 Estimated cost per run: ~$0.02

---

## 💬 Example Output

![withvisual_sql.png](fileId:1287)
---

## 🧰 Key Components

- MCP Server Trigger → Receives natural queries  
- Claude 3.5 Haiku → Plans, reasons, splits tasks  
- DeepSeek → SQL and QuickChart generation  
- checkdatabase subflow → Validates SQL  
- Plot Tool → Converts data to QuickChart URLs  
- Insert/Update nodes → Edits PostgreSQL records  
- Markdown Formatter → Combines output into readable message

---

## 🤖 Model Configuration Notes

This workflow uses two models:

1. **Claude 3.5 Haiku (Anthropic)**  
Used as the MCP agent for reasoning, planning, and tool calling. Claude is the native model for MCP and delivers reliable results in fewer steps.

2. **DeepSeek**  
Used in:
- `checkdatabase` for SQL generation  
- `Plot Tool` for QuickChart JSON generation

🧠 All models are modular — you can plug in OpenAI, Gemini, or Mistral if desired.

---

## 🔐 Security by Design

- No raw SQL from user input  
- Fully parameterized queries  
- Structured tool calling with validation  
- Safe output format (text + chart links)

---

## 🧪 Try This Prompt

&gt; “Show me top 5 products by revenue, revenue per month chart, and best customers.”

Expected output:
- 3 KPIs
- Multiple SQL queries
- 2–3 QuickChart links
- Markdown summary for dashboard/Slack

---

## 🛠 How to Use

1. Import:
   - `Build_your_own_PostgreSQL_MCP_server__visuals_capable_.json`
   - `checkdatabase.json`
   - `Plot_tool.json`

2. Create your **PostgreSQL credential** under “Credentials” in n8n:
   - Must match the name used in the workflow (e.g., `Postgres account 3`)

3. Assign AI models:
   - Claude 3.5 Haiku → MCP agent (`Claude 3.5 MCP Agent`)
   - DeepSeek → LLM nodes inside `checkdatabase` and `Plot Tool`

4. Trigger the workflow using the URL from the **MCP Server Trigger** node  
   (e.g., in a chatbot, HTTP request, or Webhook UI)

---

## 📦 End-User Setup Guide

If you're using this template for the first time, follow these exact steps:

1. Go to your n8n dashboard and import all three workflows (main + subflows)
2. Create a PostgreSQL credential using your host, database, user, and password
3. Go to the Claude and DeepSeek nodes, and connect them to your account(s)
4. Use the Webhook URL in the `MCP Server Trigger` to connect your chatbot or frontend
5. Send a prompt like:  
   “Show me revenue per month, top 5 products, and a chart of best customers.”

Optional:  
- You can increase the MCP Agent’s `MaxIterations` to go deeper (default is 30)
- You can use Switch nodes to limit access to certain tables or actions
- Insert/Update nodes are already included and can be safely enabled

✅ Once this is done, your AI assistant will:
- Read from your database  
- Visualize data via QuickChart  
- Insert or update rows  
- Respond in clear, markdown-formatted summaries

---

## 🔗 More Templates by the Same Creator

1. [PostgreSQL Conversational Agent with Claude & DeepSeek (Multi-KPI, Secure)](https://n8n.io/workflows/3892-postgresql-conversational-agent-with-claude-and-deepseek-multi-kpi-secure/)

2. [Conversing with Data: Transforming Text into SQL Queries and Visual Curves](https://n8n.io/workflows/3497-conversing-with-data-transforming-text-into-sql-queries-and-visual-curves/)

3. [Customer Feedback Analysis with AI, QuickChart & HTML Report Generator](https://n8n.io/workflows/3642-customer-feedback-analysis-with-ai-quickchart-and-html-report-generator/)
