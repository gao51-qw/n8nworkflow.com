# Automate Wazuh alert triage and reporting with GPT-4o-mini and Telegram

> ### 🚨Are alert storms overwhelming your Security Operations workflows?

This n8n workflow supercharges your SOC by fully automating triage, analysis, and notification for Wazuh alerts—blending event-driven automation, OpenAI-powered contextual analysis, and real-time collaboration for incident response.

### 🔑 Key Features:

### ✅ Automated Triage:
Instantly filters Wazuh alerts by severity to focus analyst effort on the signals that matter.

### 🤖 AI-Driven Investigation Reports:
Uses OpenAI's **GPT-4o-mini** to auto-generate **context-rich incident reports**, including:
- MITRE Tactic & Technique mapping  
- Impacted scope (IP addresses, hostnames)  
- External artifact reputation checks  
- Actionable security recommendations  
- Fully customizable prompt format aligned with your SOC playbooks

### 📡 Multi-Channel Notification
Delivers clean, actionable reports directly to your **SOC team via Telegram**. Easily extendable to Slack, Outlook, Gmail, Discord, or any other preferred channel.

### 🔇 Noise Reduction
Eliminates alert fatigue using **smart filters** and **custom AI prompts** that suppress false positives and highlight real threats.

### 🔧 Fully Customizable
Tweak severity thresholds, update prompt logic, or integrate additional data sources and channels — all with minimal effort

---

## ⚙️ How It Works

1. **Webhook**  
   Listens for incoming Wazuh alerts in real time.

2. **If Condition**  
   Filters based on severity (`1 low`, `2 medium`, etc.) or other logic you define.

3. **AI Investigation (LangChain + OpenAI)**  
   Summarizes full alert logs and context using custom prompts to generate:
   - Incident Overview  
   - Key Indicators  
   - Log Analysis  
   - Threat Classification  
   - Risk Assessment  
   - Security Recommendations

4. **Notification Delivery**  
   The report is parsed, cleaned, and sent to your SOC team in real-time, enabling rapid response — even during high-alert volumes.

5. **No-Op Path**  
   Efficiently discards irrelevant alerts without breaking the flow.

---

## 🧠 Why n8n + AI?

Traditional alert triage is **manual**, **slow**, and **error-prone** — leading to analyst burnout and missed critical threats.

This workflow shows how combining **workflow automation** with a **tailored AI model** enables your SOC to shift from **reactive** to **proactive**. Analysts can now:
- Focus on **critical investigations**
- Respond to alerts **faster**
- Eliminate **copy-paste fatigue**
- Get instant **contextual summaries**

&gt; ⚠️ **Note:** We learned that generic AI isn’t enough. Context-rich prompts and alignment with your actual SOC processes are key to meaningful, scalable automation.

---

## 🚀 Ready to build a smarter, less stressful SOC?

Clone this workflow, adapt it to your processes, and never miss a critical alert again.

📬 Contributions welcome!  
Feel free to raise PRs, suggest new enhancements, or fork for your own use cases.

---

**Created by [Mariskarthick M](https://www.linkedin.com/in/mariskarthickm/)**  
Senior Security Analyst | Detection Engineer | Threat Hunter | Open-Source Enthusiast

## 📊 Basic Information

- **Workflow ID:** 6978
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1533
- **Downloads:** 153
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6978)

## 👤 Author

- **Name:** mariskarthick
- **Username:** @mariskarthick

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **if** 
- **webhook** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
