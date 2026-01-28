# Google calendar MCP server for AI agent with dynamic scheduling

> # Google Calendar AI Agent with Dynamic Scheduling  
**Version**: 1.0.0  
**n8n Version**: 1.88.0+  
**Author**: Koresolucoes
**License**: MIT  

---

## Description  
An AI-powered workflow to automate Google Calendar operations using **dynamic parameters** and **MCP (Model Control Plane)** integration. Enables event creation, availability checks, updates, and deletions with timezone-aware scheduling [[1]][[2]][[8]].  

**Key Features**:  
- 📅 **Full Calendar CRUD**: Create, read, update, and delete events in Google Calendar.  
- ⏰ **Availability Checks**: Verify time slots using `AVALIABILITY_CALENDAR` node with timezone support (e.g., `America/Sao_Paulo`).  
- 🤖 **AI-Driven Parameters**: Use `$fromAI()` to inject dynamic values like `Start_Time`, `End_Time`, and `Description` [[3]][[4]].  
- 🔗 **MCP Integration**: Connects to an MCP server for centralized AI agent control [[5]][[6]].  

---

## Use Cases  
1. **Automated Scheduling**: Book appointments based on AI-recommended time slots.  
2. **Meeting Coordination**: Sync calendar events with CRM/task management systems.  
3. **Resource Management**: Check room/equipment availability before event creation.  

---

## Instructions  
### 1. Import Template  
- Go to **n8n &gt; Templates &gt; Import from File** and upload this workflow.  

### 2. Configure Credentials  
- Add **Google Calendar OAuth2** credentials under **Settings &gt; Credentials**.  
- Ensure the calendar ID matches your target (e.g., `ODONTOLOGIA` group calendar).  

### 3. Set Up Dynamic Parameters  
- Use `$fromAI('Parameter_Name')` in nodes like `CREATE_CALENDAR` to inject AI-generated values (e.g., event descriptions).  

### 4. Activate & Test  
- Enable the workflow and send test requests to the webhook path `/mcp/:tool/calendar`.  

---

## Tags  
`Google Calendar` `Automation` `MCP` `AI Agent` `Scheduling` `CRUD`  

---

## Screenshots  
![Captura de tela 20250423 155432.png](fileId:1160)
---

## License  
This template is licensed under the MIT License.  

---

### Notes:  
- Extend multi-tenancy by adding `:userId` to the webhook path (e.g., `/mcp/:userId/calendar`) [[7]].  
- For timezone accuracy, always specify `options.timezone` in availability checks [[8]].  
- Refer to [n8n’s Google Calendar docs](https://docs.n8n.io/) for advanced field mappings.  

## 📊 Basic Information

- **Workflow ID:** 3677
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3597
- **Downloads:** 359
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3677)

## 👤 Author

- **Name:** Luciano Gutierrez
- **Username:** @koresoluciones

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **googleCalendarTool** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
