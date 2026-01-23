# 🧠 Flowatch 👁️ analyze and diagnose n8n workflow errors via OpenAI and email

> # 🧠 Analyze and Diagnose n8n Workflow Errors Automatically via OpenAI and Email
![FlowatchLogodark.png](fileId:1137)
![FloWatchScreenCap.png](fileId:1138)

&gt; ⚠️ **This template is available on ☁️ Cloud & 🖥️ self-hosted n8n instances with the OpenAI node enabled.**

---

## 👤 Who is this for?

This workflow is designed for **n8n developers**, **automation engineers**, and **DevOps teams** who want to automatically capture and analyze workflow errors, and receive professional HTML-styled diagnostics directly in their inbox.

---

## 💥 What problem does this solve?

Manually troubleshooting failed workflows in n8n can be time-consuming. This template streamlines error detection by:

- Capturing workflow failures using the **Error Trigger** node
- Diagnosing root causes with the help of **OpenAI**
- Sending a fully-formatted, human-readable **HTML error report** via email
- Including practical resolutions and next-step suggestions

This helps you or your team resolve issues faster and avoid repeated manual debugging.

---

## ⚙️ What this workflow does

- ⚡ **Triggers on any n8n workflow error**
- 📦 **Extracts relevant error metadata** including node, execution ID, and timestamps
- 🧠 **Sends error content to OpenAI** for analysis and recommendations
- 💌 **Generates an HTML email report** with inline styles and clear formatting
- 📥 **Emails the result to a system administrator or support email**

---

## 🛠️ Setup

1. **Install the OpenAI node** in your self-hosted n8n instance.
2. Add your **OpenAI API Key** securely in credentials.
3. Configure the **SMTP Email node** with your email credentials.
4. Adjust the **Error Trigger** to monitor specific workflows or all workflows.
5. Set your preferred **admin or dev email address** in the final node.

---

## 🔧 How to customize this workflow to your needs

- 🧩 Use a [Set node] to define your variables, such as:
  - Default admin email
  - Workflow filter (optional)
- ✍️ Customize the prompt sent to OpenAI if you want deeper or more specific analysis
- 🎨 Modify the email HTML styles to match your brand or internal format
- 💾 Add additional logging (e.g., to Airtable, Google Sheets, or Notion) for long-term error tracking

---

## 📌 Sticky Note

**Title:** Automated Error Reporter with AI-Powered Diagnosis  
**Description:** Captures any n8n error, sends it to OpenAI, and emails a beautiful HTML report to the administrator with steps to resolve the issue. Requires OpenAI credentials and SMTP configured.

## 📊 Basic Information

- **Workflow ID:** 3595
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1119
- **Downloads:** 111
- **Created:** 2025/4/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3595)

## 👤 Author

- **Name:** RealSimple Solutions
- **Username:** @joeperes

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **errorTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×2)
- **stickyNote** (×2)
- **if** 
- **n8n** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
