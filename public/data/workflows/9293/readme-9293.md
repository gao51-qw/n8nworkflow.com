# Automatically analyze meeting effectiveness with AI & send Slack feedback

> ---

## How it works

This workflow automatically analyzes meeting effectiveness and provides constructive feedback:

• **Retrieve meeting minutes**: Automatically searches and retrieves meeting minutes from Google Drive using either a Google Docs URL or meeting name

• **Multi-dimensional analysis**: Comprehensively evaluates meeting effectiveness score, speaking time distribution, communication quality (clarity, friendliness, decisiveness, listening), disagreements, and more

• **Generate actionable feedback**: Outputs a structured report in Japanese with specific improvement suggestions and highlights of what went well

## Set up steps

Setup takes approximately **5 minutes**:

• **Connect Google Drive**: Grant permission for the workflow to access your meeting minutes by connecting to Google Drive

• **First run**: Enter the meeting minutes URL or meeting name and execute the workflow

For detailed setup instructions and step-by-step explanations, please refer to the sticky notes inside your workflow.



## 📊 Basic Information

- **Workflow ID:** 9293
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 110
- **Downloads:** 11
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9293)

## 👤 Author

- **Name:** Junichiro Tobe
- **Username:** @junichiro

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDriveTool** 
- **googleDocsTool** 
- **slack** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTrigger** 
- **set** 
- **wait** 
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** 
- **if** 
- **noOp** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
