# LeadBot autopilot — chat-to-lead for Salesforce

> # LeadBot Autopilot — Chat-to-Lead for Salesforce

## Description — How It Works
1. **Greets & Guides:** Welcomes the visitor and collects info step-by-step — Full Name → Email → Mobile → Product Interest.
2. **Validates Inputs:** Checks email/phone formats; politely re-asks if invalid.
3. **De-dupe in Salesforce:** Looks up by email; updates an existing lead if found.
4. **Create/Update Lead:** Writes to Salesforce, including `ProductInterest__c`.
5. **Notify Instantly:** Sends a Slack alert to your team and a personalized email to the prospect.
6. **Close the Loop:** Confirms submission and ends the chat.

## Description — Set Up Steps (≈45–75 mins)
- **Connect Credentials (20–30 mins):** Salesforce OAuth, OpenAI, Slack, SMTP.  
- **Tune the Prompt (5–10 mins):** Greeting, field order, product options.  
- **Map Fields (10–15 mins):** Name split, email/phone, `ProductInterest__c`.  
- **Smoke Test (10–15 mins):** Run a full chat; verify de-dupe, Slack + email.  
- **Go Live (5–10 mins):** Expose the webhook/chat entry point on your site.


## 📊 Basic Information

- **Workflow ID:** 7467
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1860
- **Downloads:** 186
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7467)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **salesforceTool** (×3)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **emailSendTool** 
- **stickyNote** (×11)
- **slackTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
