# 🚀 Local multi-LLM testing & performance tracker

> ### 🚀 **Local Multi-LLM Testing & Performance Tracker**

This workflow is perfect for developers, researchers, and data scientists benchmarking multiple LLMs with LM Studio. It dynamically fetches active models, tests prompts, and tracks metrics like word count, readability, and response time, logging results into Google Sheets. Easily adjust **temperature** 🔥 and **top P** 🎯 for flexible model testing.

---

### **Level of Effort**:  
🟢 Easy – Minimal setup with customizable options.

---

### **Setup Steps**:
1. Install LM Studio and configure models.
2. Update IP to connect to LM Studio.
3. Create a Google Sheet for result tracking.

---

### **Key Outcomes**:
- Benchmark LLM performance.
- Automate results in Google Sheets for easy comparison.


Version 1.0

## 📊 Basic Information

- **Workflow ID:** 2442
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 4339
- **Downloads:** 433
- **Created:** 2024/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2442)

## 👤 Author

- **Name:** Wildkick
- **Username:** @davidmoneil

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×9)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **dateTime** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **googleSheets** 
- **set** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
