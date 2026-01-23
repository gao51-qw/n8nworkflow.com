# Automate lead capture with AI personalized WhatsApp messages via Unipile & Google Sheets CRM

> ## Inquiry Form to Personalised WhatsApp Message

### Overview
This workflow creates a smart, automated system for capturing leads from an inquiry form, initiating personalized WhatsApp message via Unipile API, and updating your Google Sheet CRM. It uses AI to craft initial outreach messages and logs the success or failure of each message sent, ensuring you track every lead effectively. This automation helps you engage leads quickly and efficiently, without manual effort.

### Use Case
This workflow is ideal for:
* **Sales Teams**: Automate the first touchpoint with new leads, qualifying them and initiating conversations.
* **Small Businesses**: Provide immediate, personalized responses to inquiries, enhancing customer experience.
* **Customer Support**: Quickly gather more context from users after they fill out a help form.
* **Lead Generation**: Streamline the process from form submission to active lead engagement and CRM tracking.

---

### How It Works

1.  **Form Submission Trigger**: The workflow is activated when someone submits an "Inquiry Form." This form collects essential lead details such as:
    * Full Name
    * Email
    * WhatsApp number
    * Company Name
    * "How can we help you?" (a notes field)
2.  **AI Crafts Personalized Message**: An **OpenAI** node, acting as "Alex" (a friendly, approachable human assistant), generates a short, personalized, and engaging opening message for the lead. This message directly addresses the lead by their first name and includes an open-ended question to encourage them to share more details about their needs.
3.  **WhatsApp Outreach**: The AI then uses the **WhatsApp API (via Unipile)** to send this personalized message directly to the lead's WhatsApp number. **Unipile is key here, as it allows sending messages without prior chat history and can connect to your personal WhatsApp.**
4.  **Log Success or Failure**:
    * The AI checks the response from the WhatsApp API.
    * **If the WhatsApp message is sent successfully**: The lead's details, along with the personalized message, WhatsApp chat ID, and message ID, are logged into a "Successful" sheet in your Google Sheet CRM.
    * **If the WhatsApp message fails to send**: The lead's information, the attempted message, and the reason for failure are logged into a "Failed" sheet in your Google Sheet CRM. This helps you identify and follow up on problematic leads.

---

### How to Set It Up

To set up your Lead Capture Agent, follow these steps:

1.  **Google Sheet Setup**:
    * **Copy the Template**: Make a copy of the provided Google Sheet Template ("Sales Agent" with "Successful" and "Failed" sheets) into your own Google Drive.
    * **Connect Google Sheets**: Ensure your Google Sheets OAuth2 API credentials are set up in n8n and linked to the "Google Sheets" and "Google Sheets3" nodes.
    * **Update Sheet IDs**: In both "Google Sheets" and "Google Sheets3" nodes, update the `documentId` with the ID of *your copied "Sales Agent"* Google Sheet.
2.  **Unipile (WhatsApp API) Credentials**:
    * **Sign up for Unipile**: Get your DSN and API key from Unipile (they offer a 7-day free trial).
    * **Replace Placeholders**: In the "Whatsapp API" node, replace `&lt;YOUR_DSN&gt;`, `&lt;YOUR_API_KEY&gt;`, and `&lt;YOUR_ACCOUNT_ID&gt;` with your actual Unipile credentials.
3.  **OpenAI API Key**:
    * Connect your **OpenAI API key** as an API credential in n8n and link it to the "OpenAI" node.
4.  **Inquiry Form Setup**:
    * The "Enquiry Form" node generates a public webhook URL. You can embed this form on your website or share the URL directly.
    * **Alternatively, if you use your own form solution**, configure it to send data via a webhook to the URL provided by the "Enquiry Form" node.
5.  **Import the Workflow**: Import the provided workflow JSON into your n8n instance.
6.  **Activate and Test**:
    * Once all settings are complete, activate the workflow.
    * Test it by submitting a new entry through the "Inquiry Form." Check your Google Sheet to see the lead captured and the message status.

This workflow is designed to ensure no lead falls through the cracks, giving your sales or support team a powerful edge!

## 📊 Basic Information

- **Workflow ID:** 5907
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1748
- **Downloads:** 174
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5907)

## 👤 Author

- **Name:** Gain FLow AI
- **Username:** @gain-flow

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **httpRequestTool** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
