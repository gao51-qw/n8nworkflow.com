# Match users with financial aid programs using GPT 5-Nano with automatic letters & emails

> ## How It Works
The webhook receives incoming profiles and extracts relevant demographic, financial, and credential data. The workflow then queries the programs database to identify suitable options, while the AI generates personalized recommendations based on eligibility and preferences. A formal recommendation letter is created, followed by a drafted outreach email tailored to coordinators. Parsers extract structured data from the letters and emails, a Slack summary is prepared for internal visibility, and the final response is sent to the appropriate recipients.

## Setup Steps
1. Configure AI agents by adding OpenAI credentials and setting prompts for the Program Matcher, Letter Writer, and Email Drafter.
2. Connect the programs database (Airtable or PostgreSQL) and configure queries to retrieve matching program data.
3. Set up the webhook by defining the trigger endpoint and payload structure for incoming profiles.
4. Configure JSON parsers to extract relevant information from profiles, letters, and emails.
5. Add the Slack webhook URL and define the summary format for generated communications.


## Prerequisites
- OpenAI API key
- Financial programs database
- Slack workspace with webhook
- User profile structure (income, GPA, demographics)


## Use Cases
- Universities automating 500+ annual applicant communications
- Scholarship foundations personalizing outreach at scale

## Customization
- Add multilingual support for international applicants
- Include PDF letter generation with signatures

## Benefits
Reduces communication time from 30 to 2 minutes per applicant, ensures consistent professional quality



## 📊 Basic Information

- **Workflow ID:** 10627
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10627)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **code** (×2)
- **slack** 
- **respondToWebhook** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
