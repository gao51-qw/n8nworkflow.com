# Control your 3D printer with GPT-4o and OctoPrint API conversations

> Ever wanted to just tell your 3d printer what to do remotely? 

This game changer let's you converse with OpenAI agents to manage OctoPrint connected 3d printers. Great for remote management and monitoring with easy to read responses.

Query what jobs are available, Load a print job (**upload workflow in development, will be released soon for community use**), start the print job and request detailed reports on your printers performance as it runs. 

Chat &gt; AI &gt; OctoPrint API &gt; Your 3d Printer

++**Example 1:**++

**Human Input:** "What print job is running?"

**AI Response:** 

Current Print Job Details,
Job Name: Stand v1.gcode
File Size: 2,533,233 bytes
Estimated Print Time: Approximately 6 hours 15 minutes (22536 seconds)
Progress: 
Completion: 1.97%,
Current Position in File: 49,940 bytes,
Time Spent Printing: 2,611 seconds (~43.5 minutes),
Time Remaining: Approximately 5 hours 34 minutes (20,123 seconds),

Status,
Current State: Printing."

**++Example 2++**
**Human Input:** "Is my 3d Printer ok?"

**AI Response:**
"Status: Printing,
Operational: Yes,

++Temperature:++
Bed Temperature: 
Actual: 50°C,
Target: 50°C,

Nozzle (Tool 0) Temperature:
Actual: 200°C,
Target: 200°C,


++Connection Status:++
Connection State: Currently connected to the printer,
Port: /dev/ttyUSB0,
Baudrate: 115200,

Summary,
Your 3D printer is currently operational and printing without errors. The bed and nozzle temperatures are both at their target values."

## 📊 Basic Information

- **Workflow ID:** 4222
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 739
- **Downloads:** 73
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4222)

## 👤 Author

- **Name:** Liam
- **Username:** @unit98

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequestTool** (×9)
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
