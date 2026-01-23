# Automate new customer onboarding with HubSpot, Google Calendar, and AI-powered Gmail

> 

This **n8n workflow** streamlines the onboarding process for new customers by automating personalized email communication, calendar scheduling, and contact assignment in HubSpot. It is perfect for businesses looking to ensure a smooth and personalized onboarding experience for new clients.

---

## 🧑‍💼 Who is this for?

- Customer success teams who need to onboard new clients efficiently.
- Sales teams who want to ensure smooth transitions from prospect to customer.
- Small businesses that want to automate customer onboarding without complex systems.

---

## 🧩 What problem is this workflow solving?

This workflow reduces the manual effort involved in onboarding new customers by:

- Automatically sending personalized welcome emails.
- Scheduling a welcome meeting using a calendar tool.
- Assigning the customer to a Customer Success Manager (CSM) in HubSpot.

---

## ⚙️ What this workflow does

1. **Trigger via Webhook or HubSpot**:
   - The workflow can be triggered either by a webhook (direct API call) or a HubSpot trigger (e.g., when a new contact is created).

2. **HubSpot Connection**:
   - Retrieves the list of HubSpot owners (users with contact access).
   - Identifies the owner of the new contact.

3. **Calendar Management**:
   - Utilizes a Calendar Agent to schedule a welcome meeting with the new customer.
   - The Calendar Agent can create, update, or delete events as needed.

4. **Personalized Email Creation**:
   - Uses an AI-powered Email Writer (OpenAI) to generate a personalized welcome email.
   - Transforms the email text into HTML for a polished format.

5. **Email Sending via Gmail**:
   - Sends the personalized email to the customer using Gmail.
   - Sets the new contact’s owner in HubSpot for further communication tracking.

---

## 🛠️ Setup

1. Webhook Setup in n8n:
	- Create a new workflow and add a **Webhook** node.
	- Set the Webhook URL path (e.g., `/webhook-customer-onboarding`).
	- Make sure the workflow is active.

 2. Webhook Setup in HubSpot:
	- Go to **HubSpot Developer Account**.
	- Navigate to **Settings &gt; Integrations &gt; Webhooks**.
	- Create a new webhook and set the URL as the n8n Webhook URL.
	- Choose **POST** as the request method.
	- Test the webhook to ensure it triggers the workflow in n8n.

 3. Calendar Agent Configuration:
	- The Calendar Agent can be configured to create, update, or delete events.
	- Connect it to your calendar tool (Google Calendar, Outlook, etc.).
	- Customize the calendar event details (title, description, time).

 4. Email Writer Setup:
	- Customize the AI prompt in the Email Writer node to match your brand’s voice.
	- Adjust the email text format for your specific needs.

 5. Gmail Integration:
	- Connect your Gmail account in n8n.
	- Set the recipient email to the new customer’s email address.

---

## ✏️ How to customize this workflow to your needs

- **Modify the AI-Powered Email**:
  - Adjust the email prompt for the AI model to create a different welcome message.
  - Change the email format or add custom variables (e.g., customer name, service details).

- **Customize Calendar Settings**:
  - Set default time slots for welcome meetings.
  - Specify which calendar to use for scheduling.

- **Add Additional Steps**:
  - Extend the workflow to automatically assign the customer to a specific HubSpot list.
  - Add a follow-up email or survey after the welcome meeting.

---

This workflow is perfect for businesses seeking an efficient and personalized onboarding process, ensuring new customers feel welcomed and supported from day one.

## 📊 Basic Information

- **Workflow ID:** 3958
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 5137
- **Downloads:** 513
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3958)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×6)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleCalendarTool** (×5)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** 
- **splitOut** 
- **filter** 
- **hubspotTrigger** 
- **if** 
- **hubspot** (×2)
- **gmail** 
- **markdown** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
