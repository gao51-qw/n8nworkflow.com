# Automated invoice processing system with OCR & AI - AP automation with Airtable

> 
# Video Introduction
[![image.png](fileId:1519)](https://www.youtube.com/watch?v=rfu4MSvtpAw)


# Invoice Processing Automation

This template is the automation behind a simple incoming invoice automation tool (AP automation) tool built in Airtable.

Link to the Airtable base, and all other tools used, is in notes on the left of the automation.

## How it works
See how it works on video: [Full Video Walkthrough](https://www.youtube.com/watch?v=rfu4MSvtpAw)

1) We get an email with an invoice attachment:
![image.png](fileId:1384)

2) Processes and adds the data to an Airtable interface: ![image.png](fileId:1385)

3) Once we approved it and Due date approaches, it shows among Due invoices, where we can track if it's paid.

###### Looking for customization or a custom business app? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

## 📊 Basic Information

- **Workflow ID:** 4434
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 2636
- **Downloads:** 263
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4434)

## 👤 Author

- **Name:** Milan Vasarhelyi - SmoothWork
- **Username:** @vasarmilan

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×11)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **splitOut** 
- **httpRequest** 
- **airtable** (×2)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
