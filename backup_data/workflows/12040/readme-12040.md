# Launch job vacancies from ATS to Google Calendar, ClickUp and LinkedIn with GPT-4o

> ## Overview: Automated Vacancy Launch & AI Marketing

This workflow streamlines the entire job opening process by connecting your ATS to your operational and marketing tools. It not only manages deadlines but also automates the promotion of the vacancy.

**Key Features:**
1. **Schedule:** Creates SLA and Expiration events in Google Calendar based on ATS dates.
2. **Track:** Creates a central task in ClickUp to manage the selection process.
3. **Content Generation:** Uses GPT-4o to analyze the job description and write a compelling marketing post.
4. **Publish:** Automatically posts the job to LinkedIn and logs the action back in the ClickUp task.

## Setup Instructions
1. **Webhook:** Configure your Recrutei ATS (or similar) to trigger this workflow.
2. **Google Calendar:** Select the calendar for deadline tracking.
3. **ClickUp:** Map the Team, Space, and List where vacancy tasks should be created.
4. **OpenAI:** Ensure you have a valid API Key.
5. **LinkedIn:** Connect your profile or company page.

## 📊 Basic Information

- **Workflow ID:** 12040
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 16
- **Downloads:** 1
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12040)

## 👤 Author

- **Name:** Recrutei  Automações 
- **Username:** @paulo-lazari

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **code** (×3)
- **googleCalendar** (×2)
- **merge** 
- **stickyNote** (×6)
- **clickUp** (×2)
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
