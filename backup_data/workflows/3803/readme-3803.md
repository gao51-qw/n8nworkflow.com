# Connect Airtable contacts to telli for automated AI voice call scheduling

> # Upload your CRM contacts to telli and schedule AI voice-agent calls

## Introduction to telli and AI Voice-Agent Calls

telli is an innovative platform that provides AI-powered voice agents capable of making calls and performing tasks tailored to specific customer use cases. These AI voice-agents can handle a wide range of communication tasks, from appointment scheduling to customer support, with remarkable efficiency and natural conversation flow.

This template is designed for businesses and organizations looking to automate their outbound calling processes using telli's AI voice-agents in conjunction with Airtable as their CRM. It solves the problem of manual call scheduling and data transfer between your CRM and calling system, saving time and reducing human error.

### Prerequisites

- telli account
- Airtable base with contact information
- n8n instance

### Step-by-Step Setup Guide

1. **n8n Setup**:
   - Create a new workflow in n8n.
   - Add the Airtable node to connect to your CRM table.

2. **telli API Configuration**:
   - Log in to your telli dashboard.
   - Locate and copy your API key under telli - Settings - API/Webhooks.

3. **Workflow Configuration**:
   - Add two telli nodes to your n8n workflow.
   - Configure the first telli node to use the "Add a contact" operation.
   - Set up the second telli node to use the "Schedule a call" operation.

4. **Data Mapping**:
   - Map the relevant fields from your Airtable node to the telli API requests.

5. **Testing and Activation**:
   - Run a test execution of your workflow.
   - Once satisfied with the results, activate the workflow.

### API Endpoint Details

#### Add Contact

- **URL**: `https://api.telli.com/v1/add-contact`
- **Method**: POST
- **Headers**:
  - `Authorization: YOUR-API-KEY`
  - `Content-Type: application/json`
- **Payload**:
```json
{
  "external_contact_id": "string",
  "salutation": "string",
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "email": "jsmith@example.com",
  "contact_details": {},
  "timezone": "string"
}
```

#### Schedule Call Endpoint

- **URL**: `https://api.telli.com/v1/schedule-call`
- **Method**: POST
- **Headers**:
  - `Authorization: YOUR-API-KEY`
  - `Content-Type: application/json`
- **Payload**:
```json
{
  "contact_id": TELLI-CONTACT-ID,
  "agent_id": "string",
  "max_retry_days": 123,
  "call_details": {
    "message": "Hello, this is your friendly reminder!",
    "questions": [
      {
        "fieldName": "email",
        "neededInformation": "email of the customer",
        "exampleQuestion": "What is your email address?",
        "responseFormat": "email string"
      }
    ]
  },
  "override_from_number": "string"
}
```

### Use Cases

This template is versatile and can be applied to various scenarios, including:

***- Lead Qualification***: Automatically schedule calls to new leads entered in your CRM.

***- Appointment Reminders***: Set up calls to remind clients of upcoming appointments.

***- Customer Feedback***: Schedule follow-up calls after product deliveries or service completions.


### Uploading Multiple Contacts

For bulk operations, you can use the Loop node in your n8n workflow to process multiple contacts sequentially.

By leveraging this template, you can seamlessly integrate your Airtable CRM with telli's powerful AI voice-agents, automating your outbound calling process and enhancing your customer communication strategy.


## 📊 Basic Information

- **Workflow ID:** 3803
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 643
- **Downloads:** 64
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3803)

## 👤 Author

- **Name:** Paulo Ramirez
- **Username:** @paulocerez

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **airtableTrigger** 
- **n8n-nodes-telli.telli** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
