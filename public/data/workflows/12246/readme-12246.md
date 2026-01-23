# Monitor hotel competitor rates and answer WhatsApp Q&A using OpenAI GPT-4.1

> ## How It Works
***Top Branch Workflow A***

**1. The Market Intelligence:** 
- **Patrols the Market:** Runs hourly to scrape competitor rates for future days.
- **Gathers Intel:** If prices spike, it instantly checks event announcements to see if a major event is driving demand.
- **Crunches Numbers:** Calculates the exact price gap and filters out noise.

**2. The Revenue Manager:** 
- **Sets Strategy:** The AI Agent reviews the price gaps, competitor moves, and event signals.
- **Reports:** Writes a strategic Executive Summary and sends it to your WhatsApp.


***Bottom Branch Workflow B***

**3. The Consultant:** 
 - **Recall:** When you ask a question via WhatsApp, the bot retrieves the saved analysis, historical rates, and event schedule.
  - **Answer:** It acts as an on-demand analyst, conducting further analysis to give an informed answer to questions


## Setup Steps
**1. Config:** Add your hotel + competitor hotels (IDs/names) in the Config node.

**2. Monitor Window:** Set how far ahead you want to monitor (e.g., daysAhead = 30) in the Config node.

**3. Sensitivity:** Set how sensitive alerts should be (e.g., alert only if competitor moves &gt; 10%) in the Significant Competitor Change node.

**4. Connect Credentials:**

- Amadeus (to fetch hotel prices)
- WhatsApp (to send alerts)
- Postgres/SQL (to store price snapshots, history, summary)
- OpenAI (for the AI Agents)

**5. Event Source:** Update the Fetch VCC nodes to scrape your local convention center or event site.

**6. Run a test:**

Trigger Workflow A manually and confirm you receive a WhatsApp alert.

Reply to that WhatsApp message to test Workflow B (Q&A).

## Use Cases & Benefits
**For Revenue Managers:** Automate the "rate shop" routine and catch competitor moves without opening a spreadsheet.

**For Sales & Marketing Teams:** Go beyond raw data. Pairing "what changed" with "why changed" instantly.

**For Hotel Leadership:** Perfect for GMs and division leaders who need instant, decision-ready alerts via WhatsApp.

⚡ ***Zero-Touch Efficiency:*** Eliminates hours of manual searching by automating rate checks 3x daily. 
🧠 ***Contextual Intelligence:*** Tracks price AND explains why it moved by cross-referencing local events. 
🤖 ***Actionable Strategy:*** AI doesn't just report numbers; it recommends specific pricing tactics. 
📉 ***Long-Term Vision:*** Builds a permanent database of rate history, enabling the AI to answer complex trend questions over time.

## 📬 Want to Customize This?
[leelin.business@gmail.com](leelin.business@gmail.com)

## 📊 Basic Information

- **Workflow ID:** 12246
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12246)

## 👤 Author

- **Name:** Lee Lin
- **Username:** @l2l

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **set** (×3)
- **code** (×8)
- **httpRequest** (×3)
- **if** (×2)
- **dataTable** (×6)
- **merge** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **dataTableTool** 
- **whatsAppTrigger** 
- **whatsApp** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **scheduleTrigger** 
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
