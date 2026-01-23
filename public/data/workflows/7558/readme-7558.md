# Generate client proposals from call transcripts with AI, Google Slides and Airtable

> # **📋Instant Proposal Generator**

Automatically convert sales call transcripts into professional client proposals by extracting key details with AI, dynamically populating Google Slides templates, and tracking progress in Airtable, all in one seamless workflow.

## **🎯 What does this workflow do?**

This end-to-end automation creates client-ready proposals by:

1. Taking call transcripts via chat interface

2. The AI analyzes the transcript to extract key details like company name, goals, budget, and requirements, then structures this data as JSON for seamless workflow integration.

3. Generating customized documents using Google Slides template with dynamic variables, Auto populating {Company_Name}, {Budget}, etc. from extracted data.

4. Delivering finished proposals: Sharing final document with client, and Updating CRM status automatically.

## **⚙️ How it works**

1. User input: Paste call transcript in chat trigger node

2. AI analysis: OpenAI node processes text to extract structured JSON, Identifies company name, goals, budget, requirements, etc.

3. Document copy: it copies the file from Google Drive, and name it {company name} proposal.

4. Variables replacement: Replaces all template variables ({Company_Name}, {Budget}, etc.) with extracted data from ChatGPT.

4. Delivery & tracking: Shares finalized proposal with client via email, an Updates Airtable "Lead Status" to "Proposal Sent".

## **🔑 Required setup**

1. OpenAI API Key: [Create a key from here](https://platform.openai.com/settings/organization/api-keys)

2. Google Cloud Credentials: [Setup here ](https://console.cloud.google.com/)

3. Required scopes: Google Slides edit + file creation

4. Airtable Access Token: [Create one from here ](https://console.cloud.google.com/)

## 📊 Basic Information

- **Workflow ID:** 7558
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 653
- **Downloads:** 65
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7558)

## 👤 Author

- **Name:** Ilyass Kanissi
- **Username:** @ilyass

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **googleSlides** 
- **googleDrive** (×2)
- **airtable** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
