# Comprehensive SEO strategy with O3 Director & GPT-4 specialist team

> # Comprehensive SEO Strategy with O3 Director & GPT-4 Specialist Team

1. **Trigger**

   * `When chat message received` → User submits an SEO request (e.g., *“Help me rank for project management software”*).
   * The message goes straight to the **SEO Director Agent**.

2. **SEO Director Agent (O3)**

   * Acts like the **head of SEO strategy**.
   * Uses the **Think node** to plan and decide which specialists to call.
   * Delegates tasks to relevant agents.

3. **Specialist Agents (GPT-4.1-mini)**

   * Each agent has its **own OpenAI model** connection for lightweight cost-efficient execution.
   * Tasks include:

     * **Keyword Research Specialist** → Keyword discovery, clustering, competitor analysis.
     * **SEO Content Writer** → Generates optimized blog posts, landing pages, etc.
     * **Technical SEO Specialist** → Site audit, schema markup, crawling fixes.
     * **Link Building Strategist** → Backlink strategies, outreach campaign ideas.
     * **Local SEO Specialist** → Local citations, GMB optimization, geo-content.
     * **Analytics Specialist** → Reports, performance insights, ranking metrics.

4. **Feedback Loop**

   * Each agent sends results back to the **SEO Director**.
   * Director compiles insights into a **comprehensive SEO campaign plan**.

---

## ✅ Why This Setup Works Well

* **O3 Model for Director** → Handles reasoning-heavy orchestration (strategy, delegation).
* **GPT-4.1-mini for Specialists** → Cheap, fast, task-specific execution.
* **Parallel Execution** → All specialists can run at the same time.
* **Scalable & Modular** → You can add/remove agents depending on campaign needs.
* **Sticky Notes** → Already document the workflow (great for onboarding & sharing).

---


## 📊 Basic Information

- **Workflow ID:** 6908
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 878
- **Downloads:** 87
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6908)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Chatbot

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
