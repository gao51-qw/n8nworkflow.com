# Automated animal advocacy news research & weekly digest using Claude AI & Serper

> ## Who’s it for 🎯  
This workflow is designed for animal advocacy organizations, activists, and campaigners who want to automatically receive a **weekly email update** summarizing the latest news and developments related to animal rights, welfare, vegetarianism, and veganism. **It can also be easily altered to allow daily updates.**

## How it works / What it does ⚙️  
Runs on a weekly schedule and uses a multi-tool research agent subworkflow to gather verified news strictly from the past week. It compiles the information and URLs into a clean, well-structured HTML email, then sends it to the specified recipient. URLs are never altered or omitted.

## How to set up 🛠️  
1. Import this workflow into your n8n instance.  
2. Add and install the required research subworkflow:  
   [Multi-tool Research Agent for Animal Advocacy](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
3. Configure API keys in n8n credentials.  
4. Set your topics, instructions, and recipient email in the “Set Preferences” node.  
5. Adjust the schedule node to control when emails are sent.  
6. Test the full workflow to ensure proper operation.

## Requirements 📋  
- n8n instance with internet access  
- Valid API keys  
- The Multi-tool Research Agent subworkflow installed  
- SMTP or email sending configured

## How to customize 🔧  
- **Update Topics:** Change topics in the “Set Preferences” node to focus the research.  
- **Update Instructions:** Tailor summary style and focus in the preferences node.  
- **Email Recipient:** Set who receives the update email.  
- **Scheduling:** Change frequency or time in the Schedule node. Duplicate for daily versions with adjusted research parameters.  
- **HTML Styling:** Modify the “Write HTML” node’s template for custom branding or layout.  
- **Error Handling:** Add workflows to capture and alert on errors for robustness.

---

Adapt and extend as needed for your advocacy goals!


## 📊 Basic Information

- **Workflow ID:** 6482
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 302
- **Downloads:** 30
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6482)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 
- **emailSend** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
