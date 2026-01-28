# Voiceflow demo support chatbot

> ### Submission Overview for Voiceflow Demo Workflow

[View the YouTube video for this workflow here.](https://youtu.be/ET2VgV8ICDI)

#### Who is this for?
This workflow is ideal for businesses and developers using Voiceflow to power AI voice chatbots. It benefits teams that want to enhance chatbot functionality through integrations with platforms like Zendesk, Google Calendar, and Airtable.

#### What problem is this workflow solving?
The workflow addresses the need for seamless integration of chatbot interactions with backend systems. It automates customer service tasks such as ticket creation, meeting scheduling, and data reporting, reducing manual effort and enhancing efficiency.

#### What does this workflow do?
- **Customer Lookup:** Checks the database for existing customers and returns relevant details or a "NOT_FOUND" status.
- **Zendesk Ticket Creation:** Automates the creation of support tickets for customer issues.
- **Meeting Scheduling:** Integrates with Google Calendar to provide availability and schedule meetings.
- **Transcript Reporting:** Aggregates interaction data and sends it to Airtable for analysis by the product team.

#### Setup
1. Configure your Voiceflow chatbot to connect to this workflow via a webhook.
2. Set up the required integrations:
   - **Zendesk API:** For ticket creation.
   - **Google Calendar API:** For scheduling.
   - **Airtable API:** For storing transcripts.
3. Customize the workflow's nodes to match your use case, such as database fields or API endpoints.
4. Deploy the workflow on your n8n instance and test the integrations.

#### How to customize this workflow to your needs
- Adjust database queries to match your customer data schema.
- Modify the Zendesk ticket payload to include additional fields or custom formats.
- Update Google Calendar configurations for different scheduling requirements.
- Add or remove Airtable fields based on the product team's analysis needs.

This template adheres to n8n’s submission guidelines, ensuring clarity, relevance, and broad applicability for users in customer service, product development, and automation.

## 📊 Basic Information

- **Workflow ID:** 2796
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 9659
- **Downloads:** 965
- **Created:** 2025/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2796)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **if** (×4)
- **httpRequest** (×2)
- **respondToWebhook** (×7)
- **webhook** (×4)
- **set** (×8)
- **airtable** 
- **googleSheets** 
- **googleCalendar** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
