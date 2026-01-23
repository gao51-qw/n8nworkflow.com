# Cybersecurity assistant with GPT-4, Telegram bot & command execution

> **QuantumDefender AI** is a next-generation intelligent **cybersecurity assistant** designed to harness the symbolic strength of quantum computing’s promise alongside cutting-edge AI capabilities. This sophisticated agent empowers SOC analysts, red teamers, and security researchers with rapid threat investigation, operational automation, and intelligent command execution—all driven by GPT-4 and integrated tools, accessible through Telegram or on any medium.

---

🔑 **Key Features:**

**Expert-Level Cybersecurity Research & Analysis:** Leverages powerful AI models to deliver clean, detailed, domain-specific insights across detection, remediation, and offensive security.

**Command & Control:** Executes Linux shell commands, autonomous scripts, and system operations securely in isolated environments.

**Real-Time Web Intelligence:** Utilizes integrated Langsearch API to provide timely internet research with contextual relevance.

**Calendar & Scheduling Automation:** Manage Google Calendar events  or any similar application(create, update, delete, retrieve) dynamically from chat.

**Multi-Tool Orchestration:** Combines calculator functions, internet searches, command execution, and messaging for comprehensive operational support.

**Telegram-native Chatbot**: Delivers an adaptive, memory-informed, and interactive conversational experience with immediate typing indicators and high responsiveness.

---
**Conversation & Session Management:**

Maintains context-aware, session-based memory to enable smooth, multi-turn dialogues with individual users.

Sends “typing…” indicators during processing to ensure an interactive, user-friendly chat experience.

Operates exclusively within Telegram, delivering rich, timely responses and leveraging all Telegram bot capabilities.

---
**Execution Intelligence & Safety**:

Fully autonomous in deciding which tools to invoke, how frequently, and in what sequence to fulfill user requests comprehensively and responsibly.

Operates within a secure temporary folder environment to contain all command executions safely and avoid persistent or harmful side effects.

Enforces strict safety protocols to avoid running malicious or destructive commands, maintaining ethical standards and compliance.

----
**Use Cases**:

Cybersecurity researchers and operators seeking an intelligent assistant to accelerate investigations and automate routine tasks.

Red team professionals requiring on-the-fly command execution and information gathering integrated with tactical chat interactions.

SOC teams aiming to augment their alert triage and incident handling workflows with AI-powered analysis and action.

Anyone looking for a robust multi-tool AI chatbot integrated with real-world operational capabilities.

---

**Setup Requirements**:

OpenAI API key for GPT-4.1-nano language processing.

Telegram Bot API credentials with proper webhook setup to receive and respond to messages.

Google OAuth credentials for Calendar integration if calendar features are used.

SSH access credentials for executing commands on remote hosts, if remote execution is enabled.

Internet connectivity for the Langsearch web search API.

---

**Customization & Extensibility:**
The workflow is built modularly with n8n’s flexible node system. Users can extend it by adding more tools, integrating other services (ticketing, threat intel, scanning tools), or modifying interaction logic to suit specialized operational needs and environments.

---

**Created by [Mariskarthick M](https://www.linkedin.com/in/mariskarthickm/)** 
Senior Security Analyst | Detection Engineer | Threat Hunter | Open-Source Enthusiast



## 📊 Basic Information

- **Workflow ID:** 7023
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1487
- **Downloads:** 148
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7023)

## 👤 Author

- **Name:** mariskarthick
- **Username:** @mariskarthick

## 🏷️ Categories

- SecOps
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** 
- **googleCalendarTool** (×4)
- **executeCommandTool** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **httpRequestTool** 
- **telegramTrigger** 
- **telegramTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
