# Generate LinkedIn posts with Mistral AI using 7 dynamic content templates

> #  AI-Powered LinkedIn Post Generator Workflow

##  Overview
This workflow is a **two-part intelligent content creation system** built in **n8n**, designed to generate professional and on-brand **LinkedIn posts**.

It combines a conversational **frontend agent** that interacts naturally with users and a **backend post generation engine** powered by structured templates and **Mistral Cloud AI models**.

---

##  Workflow Structure
- **Frontend:** Conversational “LinkedIn Agent” that guides the user.
- **Backend:** “Post Generator” engine that produces final, high-quality content using dynamic templates.

---

##  LinkedIn Agent (Frontend Flow)

- **Trigger:** `When chat message received`
  Starts the workflow whenever a user sends a message to the chatbot or embedded interface.

- **Agent:** `LinkedIn Agent`
  - Welcomes the user and lists **7 available post templates**:
    1. Educational  
    2. Promotional  
    3. Discussion  
    4. Case Study & Testimonial  
    5. News  
    6. Personal  
    7. General  
  - Prompts the user to select a **template number**.
  - Asks for a **topic** after the user’s choice.
  - Sends both `template number` and `topic` to the backend using a **Tool** call.

- **Memory:** `Simple Memory1`  
  Stores the last 10 messages to maintain conversational context.

- **LLM Model:** `Mistral Cloud Chat Model1`  
  Used for reasoning, conversational responses, and user guidance.

- **Tool Used:** `template`  
  Invokes another trigger in the same workflow: `When Executed by Another Workflow`.
  Passes the user’s chosen template and topic to the backend.

---

##  Post Generation Engine (Backend Flow)

- **Trigger:** `When Executed by Another Workflow`  
  Receives payload from the `template` tool (template ID + topic).

- **Router Node:** `Switch between templates`  
  - Directs flow to the correct post template logic based on user’s choice (1–7).  
  - Example:  
    - `1 → Knowledge & Educational`  
    - `2 → Promotion`  
    - `3 → Discussion`  
    - `4 → Case Study & Testimonial`  
    - etc.

- **Prompt Template Nodes:**  
  Each `Set` node defines a **large, structured prompt** containing:
  - Specific tone, audience, and purpose rules  
  - Example hooks and CTAs  
  - Layout and line formatting instructions  
  - “FORBIDDEN PHRASES” list (e.g., no “game-changer”, “revolutionary”)

- **Expert Writer Agent:** `post generator`  
  - A specialized agent node that receives the selected prompt template.  
  - Generates the final LinkedIn post text using strict formatting and tone rules.  
  - **Model:** `Mistral Cloud Chat Model`

- **Output:**  
  The generated post text is sent back to the `template` tool and displayed to the user in chat.

---

##  Integrations Used
| Service | Purpose | Credential |
|----------|----------|-------------|
| **Mistral Cloud** | LLM & post generation | `Mistral Cloud account dbt` |
| **n8n Agent Framework** | Multi-agent orchestration | Native |
| **Chat UI / Webhook** | Frontend interaction | `Custom embedded UI or webhook trigger` |

---

##  Agent System Prompt Summary
&gt; “You are an intelligent LinkedIn assistant that helps users craft posts.  
List available templates, guide them to select one, and collect a topic.  
Then use the provided `template` tool to request the backend writer to generate a final post.”

Backend writer’s system prompt:  
&gt; “You are an expert LinkedIn marketing leader.  
Generate structured, professional posts for AI/automation topics.  
Avoid hype, buzzwords, and clichés.  
Keep sentences short, tone confident, and use strong openers.”

---

##  Key Features
-  Dual-agent architecture (Frontend Assistant + Backend Writer)  
-  7 dynamic content templates for flexibility  
- Conversational chat interface for ease of use  
-  Strict brand tone enforcement with style run Fully automated generation and return of final post in chat

---

##  Summary
&gt; A modular, agent-based n8n workflow for **automated LinkedIn post creation**, featuring conversational input, structured templates, and AI-generated output powered by **Mistral Cloud**.

Perfect for content teams, social media managers, and AI automation startups.

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business.
Our team at **Digital Biz Tech** can tailor it precisely to your use case — from automation logic to AI-powered content engines.

We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

---


## 📊 Basic Information

- **Workflow ID:** 10450
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 209
- **Downloads:** 20
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10450)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×2)
- **set** (×7)
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **stickyNote** (×11)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
