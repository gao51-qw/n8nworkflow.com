# Complete appointment system with Supabase and AI assistants for scheduling & management

> ## Who’s it for
This workflow is designed for organizations or services managing appointments, such as interview scheduling, class enrollments, or client meetings. It’s ideal for users who want to automate appointment creation, rescheduling, cancellation, and data retrieval from a single webhook endpoint.

## How it works / What it does
● Receives incoming appointment requests via a Webhook node.
● Processes requests in the Set Fields node, handling multiple actions:
        • Set Appointment: Adds a new appointment and assigns an available interviewer.
        • Reschedule: Changes the appointment date based on availability.
        • Cancel: Deletes an appointment and frees the interviewer’s slot.
        • Get List: Returns a user’s list of classes.
        • Get User Info: Retrieves detailed information about a specific user.
All actions follow strict instructions to check tables, update rows, and return structured JSON responses.

## How to set up
1. Add the Webhook node and set the HTTP method to POST.
2. Connect it to the Set Fields node.
3. Configure the Set Fields node with the desired assignments (set_appointment, reschedule, cancel, get_list, get_user_info).
4. Ensure your database tables (interviewers, enrollers) are properly configured and accessible.

## Requirements
• n8n environment
• Database or table access for interviewers and enrollers
• Properly formatted incoming JSON requests with necessary fields (e.g., name, nationality number, preferred date).

## How to customize the workflow
• Add or modify assignment actions to handle additional appointment scenarios.
• Adjust table names or database connections based on your environment.
• Extend JSON responses for custom client-side handling.

## 📊 Basic Information

- **Workflow ID:** 11462
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11462)

## 👤 Author

- **Name:** Optimum Office Solution
- **Username:** @isight

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×5)
- **switch** 
- **supabaseTool** (×13)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **respondToWebhook** (×5)
- **if** (×3)
- **noOp** (×6)
- **set** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
