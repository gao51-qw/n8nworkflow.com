# Create multi-channel content with O3 Director & GPT-4 specialist agents

> # Create Multi-Channel Content with O3 Director & GPT-4 Specialist Agents

This n8n workflow creates a **complete AI-powered content department**. It starts when a chat request is received, then a **Content Director Agent** (powered by OpenAI O3) analyzes the request and delegates tasks to specialized agents (blogs, social, video, email, website, strategy). Each agent is powered by **GPT-4.1-mini**, keeping costs low and quality high.

---

## ✅ **📩 Section 1: Trigger & Director Setup**

### ⚙️ **Nodes**

1️⃣ **When Chat Message Received**

* **What it does:** Starts the workflow whenever a user sends a content request.
* **Why it’s useful:** Allows real-time or on-demand content creation from chat inputs.

2️⃣ **Content Director Agent (O3)**

* **What it does:** Analyzes user request, defines the best content mix, and delegates tasks to specialist agents.
* **Why it’s useful:** Keeps your brand voice consistent and ensures all channels align to a unified content strategy.

---

### 💡 **Beginner Benefit**

✅ Single entry point → just type your content idea once
✅ AI Director coordinates everything for you
✅ No need to manage multiple tools

---

## ✅ **👥 Section 2: Specialist Content Agents**

Each request gets routed to one (or several) of these agents, depending on the strategy.

3️⃣ **Blog Content Writer**

* Long-form articles, editorials, and thought leadership pieces.

4️⃣ **Social Media Content Creator**

* Social posts, captions, hashtags, and community content.

5️⃣ **Video Script Writer**

* YouTube scripts, explainer videos, and video marketing content.

6️⃣ **Email Newsletter Writer**

* Campaigns, nurture sequences, and newsletter copy.

7️⃣ **Website Copy Specialist**

* Landing pages, product descriptions, and conversion-focused web copy.

8️⃣ **Content Strategist & Planner**
* Editorial calendars, campaign planning, and audience strategy.

---

### 💡 **Beginner Benefit**

✅ Each agent is an expert in its field
✅ Powered by **GPT-4.1-mini** → faster and cheaper
✅ Parallel execution → all content types can be generated at once

---

## ✅ **🧠 Section 3: Language Models & Execution Flow**

* **O3 Model → Content Director**

  * Handles analysis, strategy, and delegation.

* **GPT-4.1-mini → All Specialists**

  * Powers blog, social, video, email, website, and strategy agents.

* **Think Node**

  * Helps the Content Director organize reasoning before delegating tasks.

---

### 💡 **Beginner Benefit**

✅ AI Director (O3) = smart leadership
✅ Specialists (GPT-4.1-mini) = cost-efficient execution
✅ Built-in reasoning = better, more aligned campaigns

---

## 📊 **Workflow Overview**

| Section                     | What Happens                                                    | Key Benefit                |
| --------------------------- | --------------------------------------------------------------- | -------------------------- |
| 📩 Trigger & Director Setup | Workflow starts from chat → Content Director interprets request | Centralized control        |
| 👥 Specialist Agents        | Each AI agent produces tailored content                         | Multi-channel coverage     |
| 🧠 Models & Flow            | O3 for Director, GPT-4.1-mini for specialists                   | Cost-efficient + strategic |

---

## 📌 **How You Benefit Overall**

✅ One input → full content campaign
✅ Consistent brand voice across all platforms
✅ Cost-effective (O3 only for strategy, GPT-4.1-mini for bulk work)
✅ Ready-to-publish content in minutes

---

✨ You’ve basically built an **AI marketing department inside n8n** — no extra staff required! 🚀

---


## 📊 Basic Information

- **Workflow ID:** 6910
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 889
- **Downloads:** 88
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6910)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agentTool** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
