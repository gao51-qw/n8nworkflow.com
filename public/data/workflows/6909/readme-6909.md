# Multi-agent cold email campaign generator with O3 Director & GPT-4.1 specialists

> # Multi-Agent Cold Email Campaign Generator with O3 Director & GPT-4.1 Specialists

### 🌍 Overview

This workflow simulates a **virtual sales & marketing team** where each AI agent has a role:

* A **Director Agent (O3)** who manages strategy.
* Multiple **Specialist Agents (GPT-4.1-mini)** for research, writing, personalization, deliverability, sequencing, and analytics.
* Everything is triggered automatically when a new **chat message request** comes in.

---

## 🟢 Section 1: Entry & Director

🔗 **Nodes**:
1️⃣ **When chat message received (Trigger)**
💬 Starts the workflow when a new request arrives (e.g., *“Create a cold email campaign for SaaS CTOs”*).

2️⃣ **Outreach Director Agent (O3 model)**
🎯 The “manager” agent. Decides what kind of campaign is needed and assigns tasks.

3️⃣ **Think (Planning Node)**
🧠 Helps the Director structure thoughts before delegating.

💡 **Why useful?**

* Director uses **O3 (strong reasoning model)** only where strategy is needed → reduces cost.
* Provides a *single point of control* to coordinate all other agents.

---

## 🔵 Section 2: Specialist Agents

Each is powered by **GPT-4.1-mini** (cheaper + faster).

* 🔍 **Prospect Research Specialist** → researches target companies, roles, pain points.
* ✍️ **Cold Email Copywriter** → drafts subject lines, hooks, and persuasive body copy.
* 🎯 **Personalization Specialist** → inserts custom variables for each recipient.
* 📅 **Email Sequence Strategist** → designs follow-ups, timing, nurture flows.
* 📬 **Email Deliverability Expert** → ensures emails land in inbox, not spam.
* 📊 **Outreach Analytics Specialist** → tracks performance, runs A/B tests, optimizes campaigns.

💡 **Why useful?**

* Each agent is a specialist → just like a real marketing team.
* **Parallel execution** in n8n means faster results.
* Modular → you can remove or add more specialists.

---

## 🟣 Section 3: Execution Flow

1. Request comes in via **chat trigger**
2. Director (O3) interprets and delegates → calls specialists as tools
3. Specialists generate their pieces (research → copy → personalization → sequence → deliverability → analytics)
4. Director integrates results into a **cohesive cold email campaign**

---

## 🟡 Section 4: Documentation & Notes

There are two **Sticky Notes** inside the workflow:

* **Header Note** → Support info + tutorials (YouTube & LinkedIn by Yaron Been)
* **Main Note** → Full documentation (overview, use cases, cost optimization, tags)

---

## 📊 Final Overview

| Section        | What Happens             | Why It’s Useful             |
| -------------- | ------------------------ | --------------------------- |
| 🟢 Director    | Trigger + O3 strategy    | Ensures smart coordination  |
| 🔵 Specialists | GPT-4.1-mini agents      | Faster, cheaper execution   |
| 🟣 Flow        | Delegation + Integration | Automated campaign building |
| 🟡 Docs        | Sticky Notes             | In-workflow guide for users |

---

## 🚀 Benefits

* ✅ **AI-powered cold email team** without hiring humans
* ✅ **Cost-optimized** (O3 only for strategy, GPT-4.1-mini for tasks → \~90% cheaper)
* ✅ **End-to-end coverage** (research → writing → personalization → sequencing → analytics)
* ✅ **Scalable**: can run multiple campaigns in parallel
* ✅ **Customizable**: swap models, add tools, or expand team

---



## 📊 Basic Information

- **Workflow ID:** 6909
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2197
- **Downloads:** 219
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6909)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agentTool** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×7)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
